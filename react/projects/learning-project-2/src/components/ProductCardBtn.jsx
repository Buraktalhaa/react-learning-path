export const ProductCardBtn = ({ productId, handleProductSelect }) =>
    <button
        className="outline"
        onClick={() => handleProductSelect(productId)}
        >Button
    </button>