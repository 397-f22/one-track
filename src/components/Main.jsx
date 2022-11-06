import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from "react";
import PackageCardList from "./PackageCardList";
import AddPackage from "./AddPackage";
import Header from "./Header";
import AddPackageForm from "./addPackageForm";
import Search from "./Search";
import SwitchView from "./SwitchView"


const Main = ({imageData, userData}) => {
	const [data, setData] = useState(userData.packages);
	const [matchName, setMatchName] = useState("");
  const [viewDelivered, setViewDelivered] = useState(false);
	const [open, setOpen] = useState(false);
  

	const openModal = () => setOpen(true);
	const closeModal = () => setOpen(false);

  const packages = Object.fromEntries(
    Object.entries(data).filter(
        (key) => {
            return key[1].package_name.includes(matchName) &&
            key[1].response == (viewDelivered ? "Delivered" : "In Transit");
        }
    )
  );

	return (
		<div className="container">
			<Header />
      <SwitchView viewDelivered={viewDelivered} setViewDelivered={setViewDelivered} />
			<Search matchName={matchName} setMatchName={setMatchName} />
			<PackageCardList packages={packages} images={imageData}/>

			<button id="add-package-button" type="button" className="btn btn-outline-danger" onClick={openModal}>
				Add Package
			</button>
			<AddPackage open={open} close={closeModal}>
				<AddPackageForm setData={setData} data={data}/>
			</AddPackage>
		</div>
	);
};

export default Main;
