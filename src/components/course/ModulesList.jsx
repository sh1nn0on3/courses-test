// import { useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { moduleContext } from "../../contexts/module-context";

const ModulesList = () => {
  const navigate = useNavigate();
  //   const [, setmoduleDetail] = useContext(moduleContext);

  const data = [
    {
      id: "1",
      image: "https://assets.tryhackme.com/img/modules/burp-suite.png",
      name: "Burp Suite",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium perspiciatis ullam vero, repellendus esse ad et magni vitae molestias quas cumque, dolores quaerat. Facere.",
    },
    {
      id: "2",
      image: "https://assets.tryhackme.com/img/modules/phishing.png",
      name: "Phishing",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium perspiciatis ullam vero, repellendus esse ad et magni vitae molestias quas cumque, dolores quaerat. Facere.",
    },
    {
      id: "3",
      image: "https://assets.tryhackme.com/img/modules/linux-fundamentals.png",
      name: "Linux Fundamentals",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium perspiciatis ullam vero, repellendus esse ad et magni vitae molestias quas cumque, dolores quaerat. Facere.",
    },
    {
      id: "4",
      image: "https://assets.tryhackme.com/img/core-services-icon.png",
      name: "Attacking and Defending Core Services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium perspiciatis ullam vero, repellendus esse ad et magni vitae molestias quas cumque, dolores quaerat. Facere.",
    },
    {
      id: "5",
      image: "https://assets.tryhackme.com/img/modules/intro-to-offensive.png",
      name: "Attacking and Defending Core Services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium perspiciatis ullam vero, repellendus esse ad et magni vitae molestias quas cumque, dolores quaerat. Facere.",
    },
    {
      id: "6",
      image: "https://assets.tryhackme.com/img/intro-to-aws.png",
      name: "Attacking and Defending Core Services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium perspiciatis ullam vero, repellendus esse ad et magni vitae molestias quas cumque, dolores quaerat. Facere.",
    },
    {
      id: "7",
      image: "https://assets.tryhackme.com/img/modules/wireshark.png",
      name: "Attacking and Defending Core Services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium perspiciatis ullam vero, repellendus esse ad et magni vitae molestias quas cumque, dolores quaerat. Facere.",
    },
    {
      id: "8",
      image: "https://assets.tryhackme.com/img/modules/cryptography.png",
      name: "Attacking and Defending Core Services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium perspiciatis ullam vero, repellendus esse ad et magni vitae molestias quas cumque, dolores quaerat. Facere.",
    },
    {
      id: "9",
      image:
        "https://assets.tryhackme.com/img/modules/red-team-fundamentals.png",
      name: "Attacking and Defending Core Services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium perspiciatis ullam vero, repellendus esse ad et magni vitae molestias quas cumque, dolores quaerat. Facere.",
    },
    {
      id: "10",
      image:
        "https://assets.tryhackme.com/img/modules/intro-to-offensive-pentesting.png",
      name: "Attacking and Defending Core Services",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi accusantium perspiciatis ullam vero, repellendus esse ad et magni vitae molestias quas cumque, dolores quaerat. Facere.",
    },
  ];

  return (
    <div className="w-full max-w-[1600px]  ">
      <div className="header">
        <h3 className="font-[800] text-[1.2rem] ">Modules Basic</h3>
      </div>
      <div className="list-module w-full md:grid md:grid-cols-2 xl:grid-cols-3 flex overflow-x-scroll scroll-smooth scroll  gap-5 mt-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="module max-w-[350px] min-w-[200px] flex items-center "
          >
            <div className="module-img ">
              <img
                src={item.image}
                alt=""
                className="rounded-2xl cursor-pointer w-[80px] "
              />
            </div>
            <div className="product-info ml-4">
              <a
                href="#"
                className="font-[500] text-[16px] text-[#aca9a9] outline-none decoration-slate-50 "
              >
                {item.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModulesList;
