 const TotalPrice = ({visibility, totalPrice}) => {
  return (
    <div className={`${visibility} px-4 py-6 w-fit shadow-md rounded-lg font-medium text-2xl bg-white fixed top-3 right-3`}>
      <h2>Total price: R{totalPrice.toFixed(2)} </h2>
    </div>
  );
 }

 export default TotalPrice;