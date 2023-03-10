import "./skills.scss";

export default function Skills() {
  const data = [
    {
      id: 1,
      name: "Javascript/React",
      icon:
        "fa-brands fa-react fa-4x",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem.",
    },
    {
      id: 2,
      name: "Figma",
      icon:
      "fa-brands fa-figma fa-4x",
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem recusandae perspiciatis ducimus vel hic temporibus. ",
      featured: true,
    },
    {
      id: 3,
      name: "Python",
      icon:
      "fa-brands fa-python fa-4x", 

      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat magnam dolorem",
    },
  ];
  return (
    <div className="skills" id="skills">
      <h1>Skills</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              
              <i className={`${d.icon}`}></i>
              
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
