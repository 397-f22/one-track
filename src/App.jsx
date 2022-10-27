import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";
import PackageCardList from "./components/PackageCardList";
import AddPackage from "./components/AddPackage";
import Header from "./components/Header";
import AddPackageForm from "./components/addPackageForm";
import Search from "./components/Search";

const initData = {
	"1Z12345E0205271688": {
		"carrier": "UPS",
		"package_name": "shoes",
		"estimated_delivery": "2021-09-20T14:03:00",
		"last_checkpoint_location": "Skokie, IL",
		"response": "In Transit"
	},
	"1Z12345E6605272234": {
		"carrier": "UPS",
		"package_name": "candy",
		"estimated_delivery": "2021-09-20T14:03:00",
		"last_checkpoint_location": "Chicago, IL",
		"response": "In Transit"
	},
	"1Z12345E0305271640": {
		"carrier": "Amazon",
		"package_name": "white shirt",
		"estimated_delivery": "2021-09-20T14:03:00",
		"last_checkpoint_location": "Skokie, IL",
		"response": "Delivered"
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
			<Search/>
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