import { useContext } from "react"
import { CartContext } from "../contexts/CartContext"


export const Form = () => {
    const {clear} = useContext(CartContext)
    return (
        <>
            <h2 className="text-xl font-bold text-slate-700 ">Contact Information</h2>
            <form action="" className="mt-7">
                <div className="flex flex-col gap-2">
                    <label className="font-bold text-slate-700 " htmlFor="">Email Adress</label>
                    <input type="text" placeholder="correo@correo" className="rounded-lg border-slate-400" />
                    <label className="font-bold text-slate-700 " htmlFor="">Full Name</label>
                    <input type="text" placeholder="Full Name" className="rounded-lg border-slate-400" />
                </div>
                <hr />
            </form>
            <h2 className="text-xl font-bold text-slate-700 mt-7">Payment details</h2>
            <form action="" className="mt-7">
                <div className="flex flex-col gap-2 ">
                    <label className="font-bold text-slate-700 " htmlFor="">Card Number</label>
                    <input type="text" placeholder="1234 5678 2345 7655" className="rounded-lg border-slate-400" />
                    <div className="flex gap-4 ">
                        <div className="flex flex-col gap-2 w-4/5">
                            <label className="font-bold text-slate-700 " htmlFor="">Expiration date (MM/YY)</label>
                            <input type="text" placeholder="MM / YY" className="rounded-lg border-slate-400 " />
                        </div>
                        <div className="flex flex-col gap-2 w-1/5">
                            <label className="font-bold text-slate-700 " htmlFor="">CVC</label>
                            <input type="text" placeholder="CVC" className="rounded-lg border-slate-400 " />
                        </div>
                    </div>
                </div>
            </form>
            <h2 className="text-xl font-bold text-slate-700 mt-7">Shipping address</h2>
            <form action="" className="mt-7">
                <div className="flex flex-col gap-2 w-full">
                    <label className="font-bold text-slate-700" htmlFor="">Address</label>
                    <input type="text" className="rounded-lg border-slate-400" />
                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col gap-2 w-2/5">
                            <label className="font-bold text-slate-700 " htmlFor="">City</label>
                            <input type="text" className="rounded-lg border-slate-400 " />
                        </div>
                        <div className="flex flex-col gap-2 w-3/5">
                            <label className="font-bold text-slate-700 " htmlFor="">State / Province</label>
                            <input type="text" className="rounded-lg border-slate-400 " />
                        </div>
                    </div>
                </div>
                <button clear={clear} className="hover:bg-indigo-500 p-1 mt-4 bg-indigo-600 text-white font-bold rounded-lg px-4 float-right">Pay Now</button>
            </form>
        </>
    )
}