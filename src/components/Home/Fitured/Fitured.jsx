import {Card, CardHeader, CardBody, CardFooter} from "@nextui-org/card";
import Image from "next/image";
import styles from "./Fitured.module.css";

export default function Fitured(){
  return (
    <div className={styles.containerFitured}>
      <h1 className={styles.title}>Productos de temporada</h1>

      <div className={styles.container_slider}>
        <div className={styles.container}>
          <input className={styles.input1} type="radio" name="slider" id="item-1" />
          <input className={styles.input2} type="radio" name="slider" id="item-2" che />
          <input className={styles.input3} type="radio" name="slider" id="item-3" />

          <div className={styles.cards}>
            <label className={`${styles.card1} ${styles.checkedItem1}`} htmlFor="item-1" id="selector-1">
              <img className={styles.img} src="/cataviaLogo.jpeg" alt="" />
            </label>
            <label className={`${styles.card2} ${styles.checkedItem2}`} htmlFor="item-2" id="selector-2">
              <img className={styles.img} src="/cataviaLogo2.png" alt="" />
            </label>
            <label className={`${styles.card3} ${styles.checkedItem3}`} htmlFor="item-3" id="selector-3">
              <img className={styles.img} src="/cataviaLogo.jpeg" alt="" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
// export default function Fitured() {
//     const list = [
//       {
//         title: "cupcake",
//         img: "cupcake.jpeg",
//         price: "$500",
//       },
//       {
//         title: "lemonpie",
//         img: "lemonpie.jpeg",
//         price: "$3500",
//       },
//       {
//         title: "postres en tasa",
//         img: "postres.jpeg",
//         price: "$900",
//       },
//       {
//         title: "torta frutilla",
//         img: "tortafrutilla1.jpeg",
//         price: "$3500",
//       },
//       {
//         title: "torta frutilla",
//         img: "tortafrutilla1.jpeg",
//         price: "$3500",
//       },
//       {
//         title: "torta frutilla",
//         img: "tortafrutilla2.jpeg",
//         price: "$3500",
//       },
//     ];
  
//     return (
//       <div className="gap-3 grid grid-cols-2 sm:grid-cols-4 m-5">
//         {list.map((item, index) => (
//           <Card shadow="sm" key={index}>
//             <CardBody className="overflow-visible p-0">
//               <img
//                 shadow="sm"
//                 radius="lg"
//                 width="100%"
//                 alt={item.title}
//                 className="object-cover hover:object-scale-down h-[200px]"
//                 src={item.img}
//               />
//             </CardBody>
//             <CardFooter className="text-small justify-between">
//               <b>{item.title}</b>
//               <p className="text-default-500">{item.price}</p>
//             </CardFooter>
//           </Card>
//         ))}
//       </div>
//     );
//   }