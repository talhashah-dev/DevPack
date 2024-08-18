import { PhoneImg, SSDImg, ThinkPadImg3 } from "../assets/export"

const Collections = () => {
    const callouts = [
        {
          name: 'Phones',
          description: 'Get latest Mobile Devices',
          imageSrc: PhoneImg,
          imageAlt: 'Latest Mobile Phones',
          href: '#',
        },
        {
          name: 'Laptops',
          description: 'Buy New Gen Laptops',
          imageSrc: ThinkPadImg3,
          imageAlt: 'Latest Laptops',
          href: '#',
        },
        {
          name: 'SSD',
          description: 'Get Latest SSD Storage',
          imageSrc: SSDImg,
          imageAlt: 'SSD Storage',
          href: '#',
        },
      ]
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Collections</h2>

        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          {callouts.map((callout) => (
            <div key={callout.name} className="group relative">
              <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                <img
                  alt={callout.imageAlt}
                  src={callout.imageSrc}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-6 text-sm text-gray-500">
                <a href={callout.href}>
                  <span className="absolute inset-0" />
                  {callout.name}
                </a>
              </h3>
              <p className="text-base font-semibold text-gray-900">{callout.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collections