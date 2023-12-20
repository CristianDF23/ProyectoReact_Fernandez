import { useState, useContext } from "react"
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";
import Swal from 'sweetalert2'


const initialValues = {
    name: "",
    email: "",
    phone: "",
    cardNumber: "",
    code: "",
    date: "",
    address: "",
    city: "",
    state: "",
}

export const Form = ({ items }) => {

    const handleChange = (event) => {
        setBuyer((buyer) => {
            return {
                ...buyer,
                [event.target.name]: event.target.value,
            };
        });
    };

    const { clear } = useContext(CartContext)
    const [buyer, setBuyer] = useState(initialValues);

    const sendOrder = () => {
        const order = {
            buyer,
            items,
        };

        const db = getFirestore();
        const orderCollection = collection(db, "orders");

        addDoc(orderCollection, order).then(({ id }) => {



            if (id && (buyer.address && buyer.name && buyer.city && buyer.cardNumber && buyer.state && buyer.phone && buyer.email && buyer.code && buyer.date) !== "") {
                Swal.fire({
                    title: "Gracias por su compra",
                    text: `Su orden se genero como el ID: ${id}`,
                    icon: "success"
                });
                setBuyer(initialValues)
                clear()
            } else {
                Swal.fire({
                    title: "Complete todos los campos",
                    icon: "warning",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

    return (
        <>
            <h2 className="text-xl font-bold text-slate-700 ">Contact Information</h2>
            <form action="" className="mt-7">
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700 " htmlFor="name">Full Name</label>
                    <input type="text" placeholder="Full Name" value={buyer.name} onChange={handleChange} name="name" className="rounded-lg border-slate-400" />
                    <label className="font-bold text-slate-700 " htmlFor="">Email Adress</label>
                    <input type="text" placeholder="correo@correo" value={buyer.email} onChange={handleChange} name="email" className="rounded-lg border-slate-400" />
                    <label className="font-bold text-slate-700 " htmlFor="">Phone</label>
                    <input type="text" placeholder="Phone" value={buyer.phone} name="phone" onChange={handleChange} className="rounded-lg border-slate-400" />
                </div>
                <hr />
            </form>
            <h2 className="text-xl font-bold text-slate-700 mt-7">Payment details</h2>
            <form action="" className="mt-7">
                <div className="flex flex-col gap-2 ">
                    <label className="font-bold text-slate-700 " htmlFor="">Card Number</label>
                    <input type="text" placeholder="1234 5678 2345 7655" value={buyer.cardNumber} onChange={handleChange} name="cardNumber" className="rounded-lg border-slate-400" />
                    <div className="flex gap-4 ">
                        <div className="flex flex-col gap-2 w-4/5">
                            <label className="font-bold text-slate-700 " htmlFor="">Expiration date (MM/YY)</label>
                            <input type="text" placeholder="MM / YY" value={buyer.date} onChange={handleChange} name="date" className="rounded-lg border-slate-400 " />
                        </div>
                        <div className="flex flex-col gap-2 w-1/5">
                            <label className="font-bold text-slate-700 " htmlFor="">CVC</label>
                            <input type="text" placeholder="CVC" value={buyer.code} onChange={handleChange} name="code" className="rounded-lg border-slate-400 " />
                        </div>
                    </div>
                </div>
            </form>
            <h2 className="text-xl font-bold text-slate-700 mt-7">Shipping address</h2>
            <form action="" className="mt-7">
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-slate-700" htmlFor="">Address</label>
                    <input type="text" value={buyer.address} onChange={handleChange} name="address" className="rounded-lg border-slate-400" />
                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col gap-2 w-2/5">
                            <label className="font-bold text-slate-700 " htmlFor="">City</label>
                            <input type="text" value={buyer.city} onChange={handleChange} name="city" className="rounded-lg border-slate-400 " />
                        </div>
                        <div className="flex flex-col gap-2 w-3/5">
                            <label className="font-bold text-slate-700 " htmlFor="">State / Province</label>
                            <input type="text" value={buyer.state} onChange={handleChange} name="state" className="rounded-lg border-slate-400 " />
                        </div>
                    </div>
                </div>
            </form>
            <button onClick={sendOrder} type="submit" className="hover:bg-indigo-500 p-1 mt-4 bg-indigo-600 text-white font-bold rounded-lg px-4 float-right">Pay Now</button>
        </>
    )
}