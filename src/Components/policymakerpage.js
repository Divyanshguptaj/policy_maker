import React from "react";

const PolicyMakerLandingPage = () => {
  return (
    <div className="flex min-h-screen">

      <div className="flex-1 bg-gray-100">
        {/* Main Content */}

        <div className="p-8 space-y-8">
          {/* Dashboard Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800">Dashboard Overview</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-blue-600">Upcoming Events</h3>
                    <ul className="space-y-2 mt-4">
                        <li className="text-gray-700">Policy Review Meeting - Dec 5</li>
                        <li className="text-gray-700">Annual Budget Discussion - Dec 12</li>
                        <li className="text-gray-700">Community Engagement - Jan 10</li>
                    </ul>
                    </div>

                    <div className="bg-green-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-green-600">Ongoing Projects</h3>
                    <ul className="space-y-2 mt-4">
                        <li className="text-gray-700">Renewable Energy Policy - In Progress</li>
                        <li className="text-gray-700">Healthcare Improvement - Phase 2</li>
                        <li className="text-gray-700">Smart Cities Initiative</li>
                    </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-blue-600">Total Projects</h3>
                    <p className="text-gray-700">Active: 30, Completed: 10</p>
                    </div>

                    <div className="bg-green-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-green-600">Total Funding</h3>
                    <p className="text-gray-700">₹10M allocated</p>
                    </div>

                    <div className="bg-yellow-100 p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold text-yellow-600">Applicant Activity</h3>
                    <p className="text-gray-700">Applicants Involved: 150</p>
                    </div>
                </div>
            </div>


          {/* Project Monitoring and Management */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Project Monitoring and Management</h2>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Project List</h3>
                {/* You can list projects here */}
                <ul className="space-y-2 mt-4">
                  <li className="text-gray-700">Project 1 - Description, Status: In Progress</li>
                  <li className="text-gray-700">Project 2 - Description, Status: Completed</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Project Details</h3>
                {/* Placeholder for clickable project details */}
                <p className="text-gray-700">Click on a project to view more details</p>
              </div>
            </div>
          </div>

          {/* Funding Overview */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Funding Overview</h2>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-blue-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-blue-600">Total Funded Amount</h3>
                <p className="text-gray-700">$10M Distributed</p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-green-600">Funding Allocation</h3>
                {/* Placeholder for pie chart or table */}
                <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-700">
                  Pie chart placeholder
                </div>
              </div>
            </div>

            {/* Recent Funding Activity */}
            <h3 className="text-xl font-bold text-gray-800 mt-6">Recent Funding Activity</h3>
            <ul className="space-y-4 mt-4">
              <li className="text-gray-700">Funding of $2M for Project 1 - Dec 1</li>
              <li className="text-gray-700">Funding of $1M for Project 2 - Nov 20</li>
            </ul>
          </div>

          {/* Applicant Tracking */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Applicant Tracking</h2>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Applicant List</h3>
                <ul className="space-y-2 mt-4">
                  <li className="text-gray-700">John Doe - Project 1 - In Progress</li>
                  <li className="text-gray-700">Jane Smith - Project 2 - Completed</li>
                </ul>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Applicant Status</h3>
                <p className="text-gray-700">Milestones: 3/5 Completed</p>
              </div>
            </div>
            {/* Communication Tools */}
            <button className="bg-blue-500 text-white p-3 mt-6 rounded-lg">Contact Applicants</button>
          </div>

          {/* Notifications and Alerts */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Notifications and Alerts</h2>
            <div className="space-y-4 mt-6">
              <p className="text-gray-700">Project 1 - Milestone Reached!</p>
              <p className="text-gray-700">New Funding Request for Project 3.</p>
            </div>
          </div>

          {/* Analytics and Reports */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Analytics and Reports</h2>
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Visual Data Reports</h3>
                {/* Placeholder for graphs/charts */}
                <div className="h-48 bg-gray-300 flex items-center justify-center text-gray-700">
                  Graphs and charts placeholder
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h3 className="text-xl font-bold text-gray-800">Downloadable Reports</h3>
                <ul className="space-y-2 mt-4">
                  <li className="text-gray-700">
                    <a href="#" className="text-blue-600">Project Performance Report (PDF)</a>
                  </li>
                  <li className="text-gray-700">
                    <a href="#" className="text-blue-600">Funding Allocation (Excel)</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Document and File Management */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Document and File Management</h2>
            <div className="space-y-4 mt-6">
              <button className="bg-green-500 text-white p-3 rounded-lg mr-5">Upload Document</button>
              <button className="bg-yellow-500 text-white p-3 rounded-lg">Download File</button>
            </div>
          </div>

          {/* Policy Management */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Policy Management</h2>
            <button className="bg-blue-500 text-white p-3 mt-6 rounded-lg">Create New Policy</button>
            <ul className="space-y-4 mt-6">
              <li className="text-gray-700">Policy 1 - Active</li>
              <li className="text-gray-700">Policy 2 - Pending Updates</li>
            </ul>
          </div>

          {/* Collaboration Tools */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Collaboration Tools</h2>
            <div className="space-y-4 mt-6">
              <button className="bg-blue-500 text-white p-3 rounded-lg mr-5">Discussion Forum</button>
              <button className="bg-green-500 text-white p-3 rounded-lg">Assign Tasks</button>
            </div>
          </div>

          {/* Feedback and Surveys */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800">Feedback and Surveys</h2>
            <div className="space-y-4 mt-6">
              <button className="bg-yellow-500 text-white p-3 rounded-lg mr-5">Create Survey</button>
              <button className="bg-blue-500 text-white p-3 rounded-lg">View Feedback</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyMakerLandingPage;
