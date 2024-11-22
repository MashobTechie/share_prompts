import React from 'react'
// This loading feature also is for all the routes in this post folder.
const loading = () => {
    // Here, you can add any UI inside for loading, including a skeleton or a general spinner.
    // While the root page.js file in this folder is being loaded, this loading UI will show.
  return <LoadingSkeleton/>
}

export default loading;