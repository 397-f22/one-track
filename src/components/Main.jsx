import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";
import PackageCardList from "./PackageCardList";
import AddPackage from "./AddPackage";
import Header from "./Header";
import AddPackageForm from "./addPackageForm";
import Search from "./Search";


const Main = ({imageData, userData}) => {
	const [data, setData] = useState(userData.packages);
	const [packages, setPackages] = useState(userData.packages);
	const [open, setOpen] = useState(false);

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

	return (
		<div className="container">
			<Header />
			<Search data={data} setPackages={setPackages} />
			<PackageCardList packages={packages} images={imageData}/>

			<button type="button" className="btn btn-outline-danger" onClick={openModal}>
				Add Package
			</button>
			<AddPackage open={open} close={closeModal}>
				<AddPackageForm setData={setData} data={data} setPackages={setPackages} />
			</AddPackage>
		</div>
	);
};

export default Main;