import "./App.css";
import { useState } from "react";
import PackageCardList from "./components/PackageCardList";
import AddPackage from "./components/AddPackage";
import Header from "./components/Header";
import AddPackageForm from "./components/addPackageForm";

const initData = {
  "Package 1": {
    "time": "something"
  },
  "Package 2": {
    "time": "something",
  }
}

const App = () => {
  

  // const [data, error] = useDbData("/");
  // if (error) return <h1>Error loading data: {error.toString()}</h1>;
  // if (data === undefined) return <h1>Loading data...</h1>;
  // if (!data) return <h1>No data found</h1>;

  const [data, setData] = useState(initData);
	const [open, setOpen] = useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

  return (
		<div className="container">
			<Header />
			<PackageCardList data={data} />

			<button type="button" className="btn btn-outline-danger" onClick={openModal}>
				Add Package
			</button>
			<AddPackage open={open} close={closeModal}>
				<AddPackageForm setData={setData} data={data}/>
			</AddPackage>
		</div>
	);
};

export default App;