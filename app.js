document.addEventListener('DOMContentLoaded', () => {
    // Navigation Event Listener
    const navLinks = document.querySelectorAll('nav a');
    const content = document.getElementById('content');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            loadPage(page);
        });
    });

    // Load default home page on initial load
    loadPage('home');

    function loadPage(page) {
        switch (page) {
            case 'home':
                renderHomePage();
                break;
            case 'ongoing-cases':
                renderOngoingCasesPage();
                break;
            case 'bail-eligibility':
                renderBailEligibilityPage();
                break;
            case 'ai-referencing':
                renderAIReferencingPage();
                break;
            default:
                renderHomePage();
        }
    }

    function renderHomePage() {
        content.innerHTML = `
            <h2>Welcome to the Bail Reckoner Platform</h2>
            <p>Use the menu above to navigate through the platform features.</p>
        `;
    }

    function renderOngoingCasesPage() {
        content.innerHTML = `
            <h2>Cases Assigned to You</h2>
            <table class="cases-table">
                <thead>
                    <tr>
                        <th>Case Title</th>
                        <th>Applicant's Name</th>
                        <th>Date of Filing</th>
                        <th>Case Status</th>
                        <th>Scored on 3 Parameters</th>
                        <th>Next Hearing Date</th>
                        <th>Assigned Lawyer</th>
                        <th>Release Level</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Theft Case #123</td>
                        <td>John Doe</td>
                        <td>2024-08-01</td>
                        <td>Pending</td>
                        <td><button class="btn scored"><i class="fas fa-check-circle"></i> Scored</button></td>
                        <td>2024-09-10</td>
                        <td>Jane Smith</td>
                        <td><span class="badge level-1">Level 1</span></td>
                    </tr>
                    <tr>
                        <td>Fraud Case #456</td>
                        <td>Jane Roe</td>
                        <td>2024-07-20</td>
                        <td>In Progress</td>
                        <td><button class="btn not-scored"><i class="fas fa-times-circle"></i> Not Scored</button></td>
                        <td>2024-09-15</td>
                        <td>Richard Roe</td>
                        <td><span class="badge level-3">Level 3</span></td>
                    </tr>
                </tbody>
            </table>
        `;
    }

    function renderBailEligibilityPage() {
        content.innerHTML = `
            <h2>Evaluate Bail Eligibility</h2>
            <div class="eligibility-scale">
                <label for="fta">Fail to Appear (FTA) After Bail:</label>
                <input type="number" id="fta" name="fta" min="0" max="10" placeholder="Enter score 0-10">
            </div>
            <div class="eligibility-scale">
                <label for="reoffend">New Crime After Bail (Reoffend):</label>
                <input type="number" id="reoffend" name="reoffend" min="0" max="10" placeholder="Enter score 0-10">
            </div>
            <div class="eligibility-scale">
                <label for="violent-crime">New Violent Crime After Bail:</label>
                <input type="number" id="violent-crime" name="violent-crime" min="0" max="10" placeholder="Enter score 0-10">
            </div>
        `;
    }

    function renderAIReferencingPage() {
        content.innerHTML = `
            <h2>Search for Similar Cases</h2>
            <div class="case-reference">
                <label for="search">Search by Offense or Defendant Name:</label>
                <input type="text" id="search" name="search" placeholder="Enter search criteria">
            </div>
        `;
    }
});
