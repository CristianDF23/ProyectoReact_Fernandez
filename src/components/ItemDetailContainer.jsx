import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { Spinner } from "flowbite-react";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refDoc = doc(db, "articles", id);

    getDoc(refDoc).then((snapshot) => {
      setItem({ id: snapshot.id, ...snapshot.data() });
    });
  }, [id]);

  return (
    <section>
      {item ? (
        <ItemDetail item={item} />
      ) : (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 my-24 sm:py-32 lg:px-8 text-center">
          <Spinner size="xl" aria-label="Center-aligned" color="success" />
          <p className="font-bold text-xl">Loanding</p>
        </div>
      )}
    </section>
  );
};
