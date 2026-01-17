const Courses = () => {
  return (
    <div className="min-h-screen w-full bg-gray-200 px-4 sm:px-6 lg:px-10 py-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Course Overview
        </h1>
        <p className="text-sm text-gray-600">
          Detailed insights and performance of your course
        </p>
      </div>

      {/* Course Summary */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <h2 className="text-xl font-semibold mb-2">React for Beginners</h2>
        <p className="text-sm text-gray-600 mb-4">
          A complete beginner-friendly course covering React fundamentals,
          hooks, and real-world patterns.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div>
            <p className="text-2xl font-semibold text-gray-800">24</p>
            <p className="text-sm text-gray-500">Videos</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">18h</p>
            <p className="text-sm text-gray-500">Total Duration</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">320h</p>
            <p className="text-sm text-gray-500">Watch Hours</p>
          </div>
          <div>
            <p className="text-2xl font-semibold text-gray-800">96</p>
            <p className="text-sm text-gray-500">Students</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* LEFT – Videos / Modules */}
        <div className="xl:col-span-2 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Course Content</h2>

          <div className="space-y-3">
            {[1, 2, 3, 4].map((video) => (
              <div
                key={video}
                className="flex items-center justify-between border rounded-lg p-4"
              >
                <div>
                  <p className="font-medium">Video Title</p>
                  <p className="text-sm text-gray-500">
                    Duration: 45 mins
                  </p>
                </div>
                <span className="text-sm text-gray-600">
                  Watched: 78%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT – Course Analytics */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Analytics</h2>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-500">Completion Rate</p>
              <p className="text-xl font-semibold">62%</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Average Watch Time</p>
              <p className="text-xl font-semibold">11h</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Course Rating</p>
              <p className="text-xl font-semibold">4.5 ⭐</p>
            </div>

            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="text-sm text-gray-700">12 Jan 2026</p>
            </div>
          </div>
        </div>

      </div>

      {/* Enrolled Students */}
      <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
        <h2 className="text-lg font-semibold mb-4">
          Enrolled Students
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-gray-500 border-b">
                <th className="py-2">Name</th>
                <th>Email</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {[1, 2, 3].map((student) => (
                <tr key={student} className="border-b last:border-none">
                  <td className="py-2">Student Name</td>
                  <td>student@mail.com</td>
                  <td>72%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
};

export default Courses;
