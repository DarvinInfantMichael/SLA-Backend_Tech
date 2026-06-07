
import AddRemoveMethods from "../component/AddRemoveMethod";
import ConvertMethods from "../component/ConvertMethods";
import CopyMethods from "../component/CopyMethods";
import CreationMethods from "../component/CreationMethods";
import HigherOrderMethods from "../component/HigherOrderMethods";
import IterationMethods from "../component/IterationMethods";
import SearchingMethods from "../component/SearchingMethods";
import SortMethods from "../component/SortMethods";
const LearningResource = () => {
  return (
    <div className="min-h-screen animated-bg w-full">
      <div className="p-6 rounded-xl shadow-lg"></div>

      <div className="bubble bubble1"></div>
      <div className="bubble bubble2"></div>
      <div className="bubble bubble3"></div>

      <h1 className="text-4xl font-bold text-center mb-8">
        JavaScript Array Methods
      </h1>

      <header className="bg-white/10 backdrop-blur-md border border-white/20 shadow-lg p-4 font-bold text-center">
        Learning Resources
      </header>
      <AddRemoveMethods/>
      <ConvertMethods/>
      <CopyMethods/>
      <CreationMethods/>
      <HigherOrderMethods/>
      <IterationMethods/>
      <SearchingMethods/>
      <SortMethods/>

      
    </div>
  );
};

export default LearningResource;