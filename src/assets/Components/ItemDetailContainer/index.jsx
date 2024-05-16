import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import database from "../../../../database/firebase-config";
import { getDoc, doc } from "firebase/firestore";
import Spinner from "../Spinner";
import PostItemDetail from "../PostItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    const queryDoc = doc(database, "productos", id);

    const getProductId = async () => {
        try {
            const productId = await getDoc(queryDoc);
            setProduct({ id: productId.id, ...productId.data() });
        } catch (error) {
            console.error("Error fetching product:", error);
            // Manejo del error: mostrar un mensaje al usuario o redirigir a una página de error.
        }
    };

    useEffect(() => {
        getProductId();
    }, [id]);

    if (!product) {
        return <Spinner />;
    }

    return (
        <div>
            <PostItemDetail products={product} />
        </div>
    );
};

export default ItemDetailContainer;
