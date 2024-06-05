/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export const WORKS: WorkProps[] = [
  {
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX78OrnnnP78Ov78uzmmm3nnHDmmWvnnnT////nnHH78uv89PDmmWz9+PT67eX349fqrIjoo3r008Htt5n12cj34NTpp4H56N7rsI/xyrPuvKD11sbwxKvopX3yzrruuZvy1jjaAAAFVElEQVR4nO2cW5PiIBCFCQ1JBM1Fc9EY9f//y4WoM7rjaMiUZZ1Uf4+zL5xtupvAaUWarqSYKZJWaSpSk316Ie+EUrH69BrezErQp5fwZuauj2EYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmEYhmHGYohmO+ki/LCLydb7uUqURFnVF3G8tZ9eyhuQZLN6t41itYiicnbjSsZQvt4clNLRgMpnNO9CZG227w76qs4T72ei0BVNyuq+iWN9I8/HcDcHhT7x8t3GJV70A92hK/TBy9enZqn0T3le4QZWoW9zPnhV30TxY3WDwi2sQkGW8l2h1S/B+1YI2vIltf0hfq4OVqH0jaE+6Qd1ZSa7VApbb19H76JwA3hso6wbq88pPKEplMKsx+3PM6pH26UkTnGUBCg8gimkvAkIoCOusRRSnYzOwAstkkJD1fgSc0Y3n150EFTFgQEEK6UuggEl5oxaw2xSKWQeheagiyFQGsrsEC5wUQBtUrNRIX3wDNAmFfYYXGW8QgOjULZhjf6M7synFz4auw1PQnegyWG+DV2jCE9C1wxh9qgQzWJCCDVQCNdTshDow0mKYkoIywxGIdVTOgXSfT5tJhRSBXTmpmxCFrrPJqAQTqozOHXUdfsJm1RVMBF0X01mgsC1xTmvuUoatknd2Sde41QZB+1C01BhCRT2FLZLdYKTg2dsE6RQNUAXF2eyMkDfIu7gXtOoDbnDbyqsFPTIfNwmdf8PKtrhHLa/MHJks9BK9xleAMXYdqhV6eIHl4IDzxQm1+gduhpUnuP5LtUqLre7WlgSqAKFqX+tNHoZF32VWdjoXch/C17S7V3qGaAj9mOo/dHxtVLl5thaS9+9QQILpcPjxLuXhNcHv7m57tZL5RKvdYl3l3nevQd3GL2Ben0NXrduBV2Cd9V4ce/pzy3wz5j90tvztsfcheouUtL/od4Vyv2zqnELKrW66Gs5lJWvwHlrG2Xt0dtmhxDD+WZuMS7x3Na8iZGPXbvvmhvnpe4gz6QX7qNzTrwiund0a6T37N8hb8fPd9vkgW328OnF/R1/fGnXp4VLvEffxEDvMI8YEs/1hCem4AS4Ixpjs7rfRi88z7jDMUTVqXzhV/elBlQh2bZPxtn1ABVKd+Bsu0eDMA+yEMxmeYGyfrzhuQRUaPeH8S8WuszQDqZEp2XAdb5uwEJoTF4GPTnBTXDRXoe9OAGZZzzGHoPfDIG8JWKS1VK1SFdRdhfuWC+RPp4Gd0mgE1H3QAplvQg3X8RA1zQyKyfY9BIcgcJuJjigfK9A0UjHZbhAV0klikDZJg/vKJ6S+AMNikLbTXID4zhoxtoS7kGaZp7klY0UzhSlzIMmYK8Cga67Qy1sF3AeDymLwyMYxThlZlovVEg/z2KLCSOUBc4edd1+wghl2aK0ejHRk49kyZ/gyddAndCThZmBncAISyC1YfoSXYI9VcjA3xOIt2j3+CbsBjHu4Qx71If87ExZEVgEncKTHntBo3WPM4b+zegvJ6U3rTUwH/Xf0KiBdK2iLofLwDO0fblJtYqLY2Yx9b2MoVbLxfbYEl6B+eKZQrc3i97bZnHlid+PpVqpohtss59e4V+h7qfChYrL07FFD94F+98kpSsrsXd0k5EG5kb7KbJaJjfyoqav6H9HNzYmV1d1uun2fthgRuoG/Cil96tvjvmQeHPT58cOhsTLCPHMOQqq9sYgd/TXDLGb395kGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZhGIZh3sHs/edzniDwSLH69BLezEqkcw6iEZSKNF3NV6Ncpek/dVw8X6yeU1EAAAAASUVORK5CYII=",
    title: "Studio Floax",
    role: "Stagiaire",
    date: "Mai - Juin 2023",
    url: "https://www.floax.fr/",
  },
  {
    image:
      "data:image/png;base64,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",
    title: "Gifi Orvault",
    role: "Responsable de la réserve",
    date: "2020 - 2022",
    url: "https://www.gifi.fr/",
  },
  {
    image:
      "data:image/jpeg;base64,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",
    title: "Learn-Do-Succeed",
    role: "Marketeur",
    date: "2019 - 2021",
    url: "https://www.learn-do-succeed.com/",
  },
];
type WorkProps = {
  image: string;
  title: string;
  role: string;
  date: string;
  url: string;
};
export const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex items-center gap-4 hover:bg-accent/50 transiton-colors p-1 rounded"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-10 h-10 object-contain rounded-md"
      />

      <div className="mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-md font-semibold">{props.title}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
      </div>
      <p className="text-xs text-end text-muted-foreground">{props.date}</p>
    </Link>
  );
};
