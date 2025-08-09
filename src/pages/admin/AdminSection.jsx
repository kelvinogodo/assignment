<div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
        <div className="flex justify-end mb-4">
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Logout
          </button>
        </div>
        <div className="text-right">
          <p className="text-sm">Logged in as: <strong>{user?.name}</strong></p>
          <button
            onClick={logout}
            className="text-red-600 hover:underline text-sm mt-1"
          >
            Logout
          </button>
        </div>
      </div>

      {/* === EMPLOYEE SECTION === */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-medium">Employees</h2>
          {!showEmpForm ? (
            <button
              className="bg-blue-600 text-white px-4 py-1 rounded"
              onClick={() => {
                setShowEmpForm(true);
                setEditEmployee(null);
              }}
            >
              + Add Employee
            </button>
          ) : (
            <button
              className="text-red-600 hover:underline"
              onClick={() => {
                setShowEmpForm(false);
                setEditEmployee(null);
              }}
            >
              Cancel
            </button>
          )}
        </div>

        {showEmpForm && (
          <div className="mb-4">
            <EmployeeForm existing={editEmployee} onSuccess={handleEmpFormSuccess} />
          </div>
        )}

        {loadingEmployees ? (
          <p>Loading employees...</p>
        ) : (
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">Name</th>
                <th className="p-2 text-left">Email</th>
                <th className="p-2 text-left">Position</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees.map((emp) => (
                <tr key={emp.id} className="border-t">
                  <td className="p-2">{emp.name}</td>
                  <td className="p-2">{emp.email}</td>
                  <td className="p-2">{emp.position}</td>
                  <td className="p-2 text-center">
                    <button
                      className="text-blue-600 hover:underline mr-3"
                      onClick={() => handleEditEmployee(emp)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => deleteEmployee(emp.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* === LGA SECTION === */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-medium">Local Government Areas</h2>
          {!showLGAForm ? (
            <button
              className="bg-green-600 text-white px-4 py-1 rounded"
              onClick={() => {
                setShowLGAForm(true);
                setEditLGA(null);
              }}
            >
              + Add LGA
            </button>
          ) : (
            <button
              className="text-red-600 hover:underline"
              onClick={() => {
                setShowLGAForm(false);
                setEditLGA(null);
              }}
            >
              Cancel
            </button>
          )}
        </div>

        {showLGAForm && (
          <div className="mb-4">
            <LGAForm existing={editLGA} onSuccess={handleLGAFormSuccess} />
          </div>
        )}

        {loadingLgas ? (
          <p>Loading LGAs...</p>
        ) : (
          <table className="w-full border text-sm">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-2 text-left">LGA Name</th>
                <th className="p-2 text-left">Code</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {lgas.map((lga) => (
                <tr key={lga.id} className="border-t">
                  <td className="p-2">{lga.name}</td>
                  <td className="p-2">{lga.code}</td>
                  <td className="p-2 text-center">
                    <button
                      className="text-blue-600 hover:underline mr-3"
                      onClick={() => handleEditLGA(lga)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-600 hover:underline"
                      onClick={() => deleteLGA(lga.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* === DOCUMENT SECTION === */}
      <div className="mt-10">
        <AllDocumentsList />
      </div>
    </div>