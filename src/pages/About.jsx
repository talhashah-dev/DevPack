import { JohnImg, FatimaImg, AliImg } from "../assets/export";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    image: JohnImg,
    description:
      "Passionate about tech and coding, John leads DevPack with a mission to provide developers with the best tools.",
      linkedIn: "#", 
      twitter: "#",
  },
  {
    name: "Fatima",
    role: "Product Manager",
    image: FatimaImg,
    description:
      "Fatima is dedicated to ensuring our product lineup meets the diverse needs of developers, bringing a unique perspective to our team.",
    linkedIn: "#", 
    twitter: "#",
  },  
  {
    name: "Ali",
    role: "Customer Success Lead",
    image: AliImg,
    description:
      "Ali is dedicated to ensuring our customers have the best possible experience with DevPack.",
    linkedIn: "#", 
    twitter: "#",
  },
];

const About = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Introduction Section */}
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 uppercase tracking-wide">
            About DevPack
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything a Developer Needs
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            DevPack is your one-stop shop for all things tech, created by
            developers for developers. From high-performance laptops to
            essential accessories, we&apos;ve got you covered.
          </p>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-gray-900 text-center mb-8">
            Meet the Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  className="mx-auto h-40 w-40 rounded-full object-cover"
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                />
                <h4 className="mt-4 text-lg font-medium text-gray-900">
                  {member.name}
                </h4>
                <p className="mt-2 text-base text-gray-500">{member.role}</p>
                <p className="mt-2 text-sm text-gray-500">
                  {member.description}
                </p>
                <div className="mt-4 flex justify-center space-x-4">
                  <a
                    href={member.linkedIn}
                    className="text-gray-500 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.4c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.4h-3v-5c0-1.1-.9-2-2-2s-2 .9-2 2v5h-3v-10h3v1.3c.74-1.03 2.09-1.3 3.17-.66 1.08.64 1.83 1.92 1.83 3.36v6z" />
                    </svg>
                  </a>
                  <a
                    href={member.twitter}
                    className="text-gray-500 hover:text-gray-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M24 4.56c-.88.39-1.83.65-2.82.77 1.01-.61 1.78-1.58 2.15-2.73-.95.57-2 1-3.12 1.23-.9-.96-2.18-1.55-3.6-1.55-2.73 0-4.95 2.22-4.95 4.95 0 .39.04.76.13 1.12-4.12-.21-7.78-2.18-10.23-5.17-.43.74-.68 1.58-.68 2.48 0 1.71.87 3.23 2.18 4.12-.8-.02-1.56-.24-2.22-.61v.06c0 2.39 1.7 4.39 3.95 4.84-.41.11-.83.17-1.27.17-.31 0-.61-.03-.9-.09.61 1.91 2.39 3.3 4.5 3.34-1.65 1.29-3.73 2.06-5.99 2.06-.39 0-.78-.02-1.16-.07 2.13 1.37 4.65 2.17 7.36 2.17 8.83 0 13.66-7.31 13.66-13.66l-.01-.62c.94-.68 1.75-1.52 2.4-2.48z" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
