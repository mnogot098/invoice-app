import { useRef, useState } from "react";
import ReactToPrint from "react-to-print";
import ClientDetails from "./components/ClientsDetails";
import Dates from "./components/Dates";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notes from "./components/Notes";
import Table from "./components/Table";
import TableForm from "./components/TableForm";

function App() {
  const [showInvoice, setShowInvoice] = useState(false);
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bankName, setBankName] = useState("");
  const [bankAccount, setBankAccount] = useState("");
  const [website, setWebsite] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientAdress, setclientAdress] = useState("");
  const [invoiceNumber, setinvoiceNumber] = useState("");
  const [invoiceDate, setinvoiceDate] = useState("");
  const [dueDate, setinvoiceDueDate] = useState("");
  const [notes, setNotes] = useState("");

  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [amount, setAmount] = useState("");
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  const componentRef = useRef();

  const handlePrint = () => {
    window.print();
  };
  return (
    <>
      <main className="p-5 m-5 md:mx-auto lg:max-w-3xl lg:mx-auto bg-white rounded shadow my-2">
        {showInvoice ? (
          <>
            <ReactToPrint
              trigger={() => (
                <div className="flex justify-end mt-2">
                  <button
                    className="mb-4 bg-blue-500 py-1 px-4
          border-2 border-blue-600 text-white font-bold 
          hover:bg-white hover:text-blue-500 transition ease-in-out delay-150"
                  >
                    Print / Download
                  </button>
                </div>
              )}
              content={() => componentRef.current}
            />
            <div ref={componentRef} className="p-5">
              <Header handlePrint={handlePrint} />
              <Details name={name} adress={adress} />
              <ClientDetails name={clientName} clientAdress={clientAdress} />
              <Dates
                invoiceNumber={invoiceNumber}
                invoiceDate={invoiceDate}
                dueDate={dueDate}
              />
              <Table
                description={description}
                quantity={quantity}
                price={price}
                amount={amount}
                list={list}
                setList={setList}
                total={total}
                setTotal={setTotal}
              />
              <Notes notes={notes} />
              <Footer
                name={name}
                adress={adress}
                website={website}
                email={email}
                phone={phone}
                bankAccount={bankAccount}
                bankName={bankName}
              />
            </div>
            <div className="flex justify-end py-4">
              <button
                className="bg-green-500 py-2 px-8 rounded shadow 
                                 border-2 border-green-600 text-white font-bold 
                                 hover:bg-white hover:text-green-500 transition ease-in-out delay-150"
                onClick={() => {
                  setShowInvoice(false);
                }}
              >
                Edit Informations
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center">
              <article className="md:grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="name">Enter your name</label>
                  <input
                    type="text"
                    name="text"
                    id="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="adress">Enter your adress</label>
                  <input
                    type="text"
                    name="text"
                    id="adress"
                    autoComplete="off"
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="email">Enter your email</label>
                  <input
                    type="email"
                    name="text"
                    id="email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="website">Enter your website</label>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    autoComplete="off"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="phone">Enter your phone</label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="off"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="bankName">Enter your bank name</label>
                  <input
                    type="text"
                    name="bankName"
                    id="bankName"
                    autoComplete="off"
                    value={bankName}
                    onChange={(e) => setBankName(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="bankAccount">Enter your bank account</label>
                  <input
                    type="text"
                    name="bankAccount"
                    id="bankAccount"
                    autoComplete="off"
                    value={bankAccount}
                    onChange={(e) => setBankAccount(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="clientName">Enter your client name</label>
                  <input
                    type="text"
                    name="clientName"
                    id="clientName"
                    autoComplete="off"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  {" "}
                  <label htmlFor="clientAdress">Enter your client adress</label>
                  <input
                    type="text"
                    name="clientAdress"
                    id="clientAdress"
                    autoComplete="off"
                    value={clientAdress}
                    onChange={(e) => setclientAdress(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="invoiceNumber">
                    Enter your invoice number
                  </label>
                  <input
                    type="text"
                    name="invoiceNumber"
                    id="invoiceNumber"
                    autoComplete="off"
                    value={invoiceNumber}
                    onChange={(e) => setinvoiceNumber(e.target.value)}
                  />
                </div>
              </article>
              <article className="md:grid grid-cols-2 gap-5">
                <div className="flex flex-col">
                  <label htmlFor="invoiceDate">Enter your invoice date</label>
                  <input
                    type="date"
                    name="invoiceDate"
                    id="invoiceDate"
                    autoComplete="off"
                    value={invoiceDate}
                    onChange={(e) => setinvoiceDate(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="dueDate">Enter your invoice due date</label>
                  <input
                    type="date"
                    name="dueDate"
                    id="dueDate"
                    autoComplete="off"
                    value={dueDate}
                    onChange={(e) => setinvoiceDueDate(e.target.value)}
                  />
                </div>
              </article>

              <article>
                <TableForm
                  description={description}
                  setDescription={setDescription}
                  quantity={quantity}
                  setQuantity={setQuantity}
                  price={price}
                  setPrice={setPrice}
                  amount={amount}
                  setAmount={setAmount}
                  list={list}
                  setList={setList}
                  total={total}
                  setTotal={setTotal}
                />
              </article>

              <label htmlFor="notes" className="my-5">
                Enter your notes
              </label>
              <textarea
                name="notes"
                id="notes"
                cols="30"
                rows="5"
                value={notes}
                onChange={(e) => {
                  setNotes(e.target.value);
                }}
              />

              <button
                className="mt-2 bg-blue-500 py-2 px-8 rounded shadow 
                                 border-2 border-blue-500 text-white font-bold 
                                 hover:bg-white hover:text-blue-500 transition ease-in-out delay-150"
                onClick={() => {
                  setShowInvoice(true);
                }}
              >
                Preview Invoice
              </button>
            </div>
          </>
        )}
      </main>
    </>
  );
}

export default App;
