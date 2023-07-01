import Logo from "./assets/logo.png";
import Pic from "./assets/pic.png";
import Rec1 from "./assets/Rectangle1.png";
import Rec2 from "./assets/Rectangle2.png";
import Pet1 from "./assets/pets/pet1.png";
import Pet2 from "./assets/pets/pet2.png";
import Pet3 from "./assets/pets/pet3.png";
import Pet4 from "./assets/pets/pet4.png";
import Pet5 from "./assets/pets/pet5.png";
import Pet6 from "./assets/pets/pet6.png";
import Pet7 from "./assets/pets/pet7.png";
import Pet8 from "./assets/pets/pet8.png";
import Pro1 from "./assets/products/pro1.png";
import Pro2 from "./assets/products/pro2.png";
import Pro3 from "./assets/products/pro3.png";
import Pro4 from "./assets/products/pro4.png";
import Pro5 from "./assets/products/pro5.png";
import Pro6 from "./assets/products/pro6.png";
import Pro7 from "./assets/products/pro7.png";
import Pro8 from "./assets/products/pro8.png";
import Gift from "./assets/gift.png";
import knowledge1 from "./assets/knowledge/knowledge1.png";
import knowledge2 from "./assets/knowledge/knowledge2.png";
import knowledge3 from "./assets/knowledge/knowledge3.png";
import Socials1 from "./assets/socials/Instagram.png";
import Socials2 from "./assets/socials/Facebook.png";
import Socials3 from "./assets/socials/twitter.png";
import Socials4 from "./assets/socials/YouTube.png";
import Banner1Pic from "./assets/horizontal-shot-adult-girl-jeans-overalls-kissing-cute-puppy-while-raising-it-air-young-girl-being-love-with-her-dog-clothed-trendy-jumper-display-affection 3.png";
import Sell1 from "./assets/sellers/1.png";
import Sell2 from "./assets/sellers/2.png";
import Sell3 from "./assets/sellers/3.png";
import Sell4 from "./assets/sellers/4.png";
import Sell5 from "./assets/sellers/5.png";
import Sell6 from "./assets/sellers/6.png";
import Sell7 from "./assets/sellers/7.png";

interface PetData {
  title: string;
  gene: string;
  age: string;
  price: string;
  img: string;
}

interface ProData {
  title: string;
  product: string;
  size?: string;
  price: string;
  img: string;
}

interface KnowlageData {
  title: string;
  section: string;
  img: string;
}

const petData: PetData[] = [
  {
    title: "MO231 - Pomeranian White",
    gene: "Male",
    age: "02 months",
    price: "6.900.000 VND",
    img: Pet1,
  },
  {
    title: "MO502 - Poodle Tiny Yellow",
    gene: "Female",
    age: "02 months",
    price: "3.900.000 VND",
    img: Pet2,
  },
  {
    title: "MO102 - Poodle Tiny Sepia",
    gene: "Male",
    age: "02 months",
    price: "4.000.000 VND",
    img: Pet3,
  },
  {
    title: "MO512 - Alaskan Malamute Grey",
    gene: "Male",
    age: "02 months",
    price: "8.900.000 VND",
    img: Pet4,
  },
  {
    title: "MO231 - Pembroke Corgi Cream",
    gene: "Male",
    age: "02 months",
    price: "7.900.000 VND",
    img: Pet5,
  },
  {
    title: "MO502 - Pembroke Corgi Tricolor",
    gene: "Male",
    age: "02 months",
    price: "9.000.000 VND",
    img: Pet6,
  },
  {
    title: "MO231 - Pomeranian White",
    gene: "Female",
    age: "02 months",
    price: "6.500.000 VND",
    img: Pet7,
  },
  {
    title: "MO512 - Poodle Tiny Dairy Cow",
    gene: "Male",
    age: "02 months",
    price: "5.000.000 VND",
    img: Pet8,
  },
];

const proData: ProData[] = [
  {
    title: "Reflex Plus Adult Cat Food Salmon",
    product: "Dog Food",
    size: "1.5kg",
    price: "140.000 VND",
    img: Pro1,
  },
  {
    title: "Reflex Plus Adult Cat Food Salmon",
    product: "Cat Food",
    size: "385gm",
    price: "165.000 VND",
    img: Pro2,
  },
  {
    title: "Cat scratching ball toy kitten sisal rope ball",
    product: "Toy",
    price: "1.100.000 VND",
    img: Pro3,
  },
  {
    title: "Cute Pet Cat Warm Nest",
    product: "Toy",
    price: "410.000 VND",
    img: Pro4,
  },
  {
    title: "NaturVet Dogs - Omega-Gold Plus Salmon Oil",
    product: "Dog Food",
    size: "385gm",
    price: "350.000 VND",
    img: Pro5,
  },
  {
    title: "Costumes Fashion Pet Clother Cowboy Rider",
    product: "Costume",
    size: "sm",
    price: "500.000 VND",
    img: Pro6,
  },
  {
    title: "Costumes Chicken Drumsti ck Headband",
    product: "Costume",
    size: "sm",
    price: "400.000 VND",
    img: Pro7,
  },
  {
    title: "Plush Pet Toy",
    product: "Toy",

    price: "250.000 VND",
    img: Pro8,
  },
];

const knowledgeData: KnowlageData[] = [
  {
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    section:
      "The Pomeranian, also known as the Pomeranian (Pom dog), is always in the top of the cutest pets. Not only that, the small, lovely, smart, friendly, and skillful circus dog breed.",
    img: knowledge1,
  },
  {
    title: "Dog Diet You Need To Know",
    section:
      "Dividing a dog's diet may seem simple at first, but there are some rules you should know so that your dog can easily absorb the nutrients in the diet. For those who are just starting to raise dogs, especially newborn puppies with relatively weak resistance.",
    img: knowledge2,
  },
  {
    title:
      "Why Dogs Bite and Destroy Furniture and How to Prevent It Effectively",
    section:
      "Dog bites are common during development. However, no one wants to see their furniture or important items being bitten by a dog.",
    img: knowledge3,
  },
];

const sellers = [
  { img: Sell1 },
  { img: Sell2 },
  { img: Sell3 },
  { img: Sell4 },
  { img: Sell5 },
  { img: Sell6 },
  { img: Sell7 },
];

const Navbar = () => {
  return (
    <div className="p-10 px-0 dark-blue">
      <div className="flex justify-between">
        <img src={Logo} />

        <a className="my-auto hidden md:block">Home</a>
        <a className="my-auto hidden md:block">Category</a>
        <a className="my-auto hidden md:block">About</a>
        <a className="my-auto hidden md:block">Contact</a>

        <div className="hidden md:flex bg-white rounded-2xl">
          <IconSearch className="my-auto ml-4 text-gray-400" />
          <input
            className="rounded-2xl ml-2"
            placeholder="Search something here!"
            type="text"
          />
        </div>

        <div className="dark-blue-bg text-white flex rounded-full px-8">
          <div className="mx-auto my-auto font-semibold">
            Join The Community
          </div>
        </div>
        <p className="my-auto hidden md:block">VND</p>
      </div>
    </div>
  );
};

const BelowNavbar = () => {
  return (
    <div className="flex flex-col md:flex-row dark-blue">
      <div>
        <p className="text-6xl font-bold md:text-7xl">One More Friend</p>
        <p className="text-5xl md:text-7xl font-extralight">
          Thousands More Fun!
        </p>
        <p className="mt-5">
          Having a pet means you have more joy, a new friend, a happy person who
          will always be with you to have fun. We have 200+ different pets that
          can meet your needs!
        </p>
        <div className="flex mt-5">
          <div className="dark-blue border-2 border-solid border-dark-blue p-4 rounded-full px-6 mr-5">
            View Intro
          </div>
          <div className="dark-blue-bg text-white p-4 rounded-full px-6">
            Explore Now
          </div>
        </div>
      </div>
      <div>
        <div className="relative w-full h-full mt-10 md:mt-0">
          <img src={Rec1} className="absolute -translate-y-5 bottom-0" />
          <img src={Rec2} className="absolute bottom-0" />
          <img src={Pic} className="relative bottom-0" />
        </div>
      </div>
    </div>
  );
};

const GalleryPet: React.FC<{ data: PetData[] }> = ({ data }) => {
  const ItemsForGallery: React.FC<{ data: PetData }> = ({ data }) => {
    return (
      <div className="rounded-xl shadow-lg text-black p-3">
        <img src={data.img} className="w-full rounded-lg mx-auto" />
        <p className="mt-3 font-bold text-base md:text-xl">{data.title}</p>
        <div className="mt-2 flex flex-col md:flex-row text-base md:text-xl text-gray-500">
          <p className="mr-0 md:mr-5 font-light">
            Gene: <span className="font-bold">{data.gene}</span>
          </p>
          <p className="font-light">
            Age: <span className="font-bold">{data.age}</span>
          </p>
        </div>
        <p className="mt-2 font-bold text-base md:text-xl">{data.price}</p>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      {data.map((x, k) => {
        return <ItemsForGallery data={x} key={k} />;
      })}
    </div>
  );
};

const GalleryPro: React.FC<{ data: ProData[] }> = ({ data }) => {
  const ItemsForGallery: React.FC<{ data: ProData }> = ({ data }) => {
    return (
      <div className="rounded-xl shadow-lg text-black p-3">
        <img src={data.img} className="w-full rounded-lg mx-auto" />
        <p className="mt-3 font-bold text-base md:text-xl">{data.title}</p>
        <div className="mt-2 flex flex-col md:flex-row text-lg text-gray-500">
          <p className="mr-0 md:mr-5 font-light">
            Product: <span className="font-bold">{data.product}</span>
          </p>
          {data.size ? (
            <p className="font-light">
              Size: <span className="font-bold">{data.size}</span>
            </p>
          ) : (
            <></>
          )}
        </div>
        <p className="mt-2 font-bold text-base md:text-xl">{data.price}</p>
        <div className="mt-2 mon-yellow text-xs md:text-lg rounded-full font-semibold flex p-2 mb-2">
          <img src={Gift} className="mx-3" />
          Free Toy & Free Shaker
        </div>
      </div>
    );
  };
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
      {data.map((x, k) => {
        return <ItemsForGallery data={x} key={k} />;
      })}
    </div>
  );
};

const GalleryKnowlage: React.FC<{ data: KnowlageData[] }> = ({ data }) => {
  const ItemsForGallery: React.FC<{ data: KnowlageData }> = ({ data }) => {
    return (
      <div className="rounded-xl shadow-lg text-black p-3">
        <img src={data.img} className="w-full rounded-lg mx-auto" />
        <div className="w-4/12 knowlage rounded-full text-center text-white p-1 mt-5 text-sm md:text-lg">
          Pet knowledge
        </div>
        <p className="mt-3 font-bold text-xl">{data.title}</p>
        <p className="mt-2 font-light truncate-lines-2 text-xl">
          {data.section}
        </p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
      {data.map((x, k) => {
        return <ItemsForGallery data={x} key={k} />;
      })}
    </div>
  );
};

function IconSearch(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 16 16"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M11.742 10.344a6.5 6.5 0 10-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 001.415-1.414l-3.85-3.85a1.007 1.007 0 00-.115-.1zM12 6.5a5.5 5.5 0 11-11 0 5.5 5.5 0 0111 0z" />
    </svg>
  );
}

const GallerySellers = () => {
  return (
    <div className="hidden md:block">
      <div className="flex justify-between mt-10">
        {sellers.map((x, k) => {
          return <img className="max-h-16" src={x.img} key={k} />;
        })}
      </div>
    </div>
  );
};

const Section: React.FC<{
  data: {
    title: string;
    title2: string;
    className?: string;
  };
}> = ({ data }) => {
  return (
    <div className={`mt-10 ${data.className}`}>
      <p className="dark-blue">{data.title}</p>
      <div className="flex justify-between mt-5 md:mt-0">
        <p className="dark-blue font-bold text-2xl my-auto">{data.title2}</p>
        <div className="dark-blue border-2 border-solid border-dark-blue p-2 md:p-4 rounded-full px-6 text-sm md:text-base mr-5">
          View More
        </div>
      </div>
    </div>
  );
};

const Banner = () => {
  return (
    <div className="dark-blue-bg flex flex-col md:flex-row rounded-3xl mt-10">
      <div className="w-full md:w-1/2  rounded-3xl relative overflow-hidden">
        <div className="w-full h-full absolute mon-yellow z-0 rounded-full -rotate-12 -translate-y-16 scale-125"></div>
        <div className="flex flex-col w-full h-full justify-center items-center dark-blue relative z-10 p-4 mb-16 md:mb-0 md:p-0">
          <p className="font-bold text-2xl">One More Friend</p>
          <p className="text-2xl">Thousands More Fun!</p>
          <p className="mt-5 mx-10">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex mt-5">
            <div className="dark-blue border-2 border-solid border-dark-blue p-2 md:p-4 rounded-full px-6 text-sm md:text-base mr-5">
              View Intro
            </div>
            <div className="dark-blue-bg text-sm md:text-base text-white p-2 md:p-4 rounded-full px-6">
              Explore Now
            </div>
          </div>
        </div>
      </div>
      <img className="w-full md:w-1/2" src={Banner1Pic} />
    </div>
  );
};

const Footer = () => {
  return (
    <div className="p-5 mt-10">
      <div className="dark-blue-bg text-white flex flex-col md:flex-row rounded-2xl p-5 mt-10">
        <p className="w-full md:w-1/3 font-medium text-2xl">
          Register Now So You Don't Miss Our Programs
        </p>
        <div className="w-full md:w-2/3 mt-5 md:mt-0 bg-white flex flex-col md:flex-row p-2 rounded-lg justify-between">
          <input
            className="w-full md:w-2/3 border border-solid border-gray-400 max-h-16 rounded-lg"
            type="email"
            placeholder="Enter Your Email"
          />
          <div className="w-full mt-5 md:mt-0 p-2 md:p-0 md:w-1/3 dark-blue-bg rounded-lg flex justify-center items-center md:ml-5">
            <p>Subscribe Now</p>
          </div>
        </div>
      </div>

      <div className="flex md:justify-between items-center flex-col md:flex-row text-black mt-5">
        <div className="flex justify-between">
          <p className="mr-4">Home</p>
          <p className="mr-4">Category</p>
          <p className="mr-4">About</p>
          <p className="mr-4">Contact</p>
        </div>
        <div className="flex mt-5 md:mt-0">
          <img className="mr-4" src={Socials1} />
          <img className="mr-4" src={Socials2} />
          <img className="mr-4" src={Socials3} />
          <img src={Socials4} />
        </div>
      </div>
      <div className="w-full border-b-2 border-solid border-gray-500 mt-10"></div>
      <img className="mx-auto mt-5" src={Logo} />
      <div className="flex md:justify-between flex-col md:flex-row  text-black mt-5">
        <div className="flex mx-auto md:mx-0">
          <p className="mr-5 font-light">Terms of Service</p>
          <p className="font-light">Privacy Policy</p>
        </div>
        <p className="text-center mt-4 md:mt-0 font-extralight">
          © 2023 Monito. All rights reserved.
        </p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="w-full">
      <div className="mon-yellow-2 px-4 md:px-0 rounded-b-3xl">
        <div className="container mx-auto max-w-screen-xl">
          <Navbar />
          <BelowNavbar />
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-0 max-w-screen-xl">
        <Section
          data={{
            title: "What's new?",
            title2: "Take a look at some of our pets",
          }}
        />
        <GalleryPet data={petData} />

        <Banner />

        <Section
          data={{
            title: "Hard to choose right products for your pets?",
            title2: "Our Products",
          }}
        />
        <GalleryPro data={proData} />

        <Section
          data={{
            title: "Proud to be part of",
            title2: "Pet Sellers",
            className: "hidden md:block",
          }}
        />

        <GallerySellers />

        <Section
          data={{
            title: "You already know ?",
            title2: "Useful pet knowledge",
          }}
        />

        <GalleryKnowlage data={knowledgeData} />
      </div>

      <div className="mon-yellow-2 px-4 md:px-0 rounded-t-3xl">
        <div className="container mx-auto max-w-screen-xl">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
