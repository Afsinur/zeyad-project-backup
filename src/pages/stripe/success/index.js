import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Router, useNavigate } from "react-router-dom";

const serverLink = "https://zeyad-back-end.onrender.com";

const StripeSuccess = () => {
  const [saved, setSaved] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storeemail = new URLSearchParams(window.location.search).get(
      "storeemail"
    );
    let obj = { storeemail };
    let prices = JSON.parse(localStorage.getItem("zeyadStore")).map(
      ({ price_ }) => ({ price: Number(price_.split("$")[1]) })
    );

    let totalPrice = prices.reduce((acc, itm) => {
      return (acc += itm.price);
    }, 0);

    obj.totalPrice = totalPrice;

    let data = JSON.parse(localStorage.getItem("zeyadStore")).map(
      ({ price_, name_ }) => ({ price: price_, name: name_ })
    );

    obj.data = data;
    obj.date = new Date();

    console.log(obj);

    (async () => {
      let res = await fetch(`${serverLink}/api/user/paid`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });

      console.log(res);

      let resData = await res.json();

      if (resData.data === "user added!") {
        localStorage.setItem("zeyadStore", JSON.stringify([]));
        setSaved(true);
      }
    })();
  }, []);
  return (
    <div>
      <p>your payment was successfull!</p>
      {saved && (
        <Link
          onClick={(e) => {
            e.preventDefault();

            navigate("../");
          }}
        >
          <button>Shop Again</button>
        </Link>
      )}
    </div>
  );
};

export default StripeSuccess;
