const Explore = () => {
    const categories = [
        {
            icon : "",
            title: "PCs & Laptops"
        },
        {
            icon : "",
            title: "Phones"
        },
        {
            icon : "",
            title: "Storage"
        },
        {
            icon : "",
            title: "Support"
        },
        {
            icon : "",
            title: "Deals"
        },
    ]
  return (
    <div className="bg-gray-400 w-full h-36 flex items-center justify-between">
        {
            categories.map((value, index) => {
                return (
                    <div key={index}>
                        {value.title}
                    </div>
                )
            })
        }
    </div>
  )
}

export default Explore