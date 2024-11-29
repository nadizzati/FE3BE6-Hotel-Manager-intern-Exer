import Availability from './Availability';

export default function FullAvailabilities() {
    return(

        <div className="flex flex-col py-20 bg-[#B7CEDE]">
            <div className="bg-red-300 text-white p-2 mx-48 font-bold italic text-xl rounded-lg flex items-center justify-center">
                    <p>Select Your Room</p>
                </div>
            <Availability
                roomTitle="Single Room"
                tooltipText="A comfortable room with a single bed, ideal for solo travelers seeking privacy and relaxation during their stay."
                roomImage={"https://hackmd.io/_uploads/S1KrP7DQkl.png"}
                facilities={{
                    text1: "1 Single bed",
                    text2: "Shower",
                    text3: "12-18m²",
                }}
                benefit1={{
                    line1: "Breakfast for Rp 100,941/person",
                    line2: "Free Cancellation before 12.00",
                    line3: "Instant Confirmation",
                }}
                price1={{
                    price: "Rp 2,234,001",
                    total: "Total (incl. taxes & fees Rp 2,456,012)",
                }}
                benefit2={{
                    line1: "Include 1 breakfast",
                    line2: "Free Cancellation before 12.00",
                    line3: "Instant Confirmation",
                    line4: "Free fitness center access",
                }}
                price2={{
                    price: "Rp 3,456,002",
                    total: "Total (incl. taxes & fees Rp 3,676,022)",
                }}
            />

            <Availability
                roomTitle="Twin Room"
                tooltipText="A room with two separate single beds (twin beds), perfect for two guests who prefer their own sleeping space."
                roomImage={"https://hackmd.io/_uploads/HksSvXwXJg.png"}
                facilities={{
                    text1: "2 Single bed",
                    text2: "Shower or Bathtub",
                    text3: "16-20m²",
                }}
                benefit1={{
                    line1: "Breakfast for Rp 100,941/person",
                    line2: "Free Cancellation before 12.00",
                    line3: "Instant Confirmation",
                }}
                price1={{
                    price: "Rp 2,750,001",
                    total: "Total (incl. taxes & fees Rp 2,910,012)",
                }}
                benefit2={{
                    line1: "Include 2 breakfast",
                    line2: "Free Cancellation before 12.00",
                    line3: "Instant Confirmation",
                    line4: "Free fitness center access",
                }}
                price2={{
                    price: "Rp 3,901,002",
                    total: "Total (incl. taxes & fees Rp 4,321,021)",
                }}
            />

            <Availability
                roomTitle="Family Room"
                tooltipText="A spacious room with multiple beds or a sofa bed option, ideal for small families or groups."
                roomImage={"https://hackmd.io/_uploads/BksBvQvX1e.png"}
                facilities={{
                    text1: "1 Queen bed + Sofa bed",
                    text2: "Shower and Bathtub",
                    text3: "25-30m²",
                }}
                benefit1={{
                    line1: "Breakfast for Rp 250,941/person",
                    line2: "Free Cancellation before 12.00",
                    line3: "Instant Confirmation",
                }}
                price1={{
                    price: "Rp 3,756,021",
                    total: "Total (incl. taxes & fees Rp 4,156,087)",
                }}
                benefit2={{
                    line1: "Include breakfast up to 4 people",
                    line2: "Free Cancellation before 12.00",
                    line3: "Instant Confirmation",
                    line4: "Free kids' play area access",
                }}
                price2={{
                    price: "Rp 4,687,023",
                    total: "Total (incl. taxes & fees Rp 5,008,980)",
                }}
            />

        </div>
    );

}