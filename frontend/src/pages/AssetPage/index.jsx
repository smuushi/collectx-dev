import { Asset } from "../../components";
import { pageSettings } from "../../constants/style";
import { useParams } from "react-router-dom";

const AssetPage = () => {
  let { id } = useParams();
  //如果拥有后端，这里发送get请求就行了
  
  
  return(
      <div className={`${pageSettings.padding} flex justify-center mt-12 md:mt-64`}>
        <div className="w-full md:w-6/7 xl:w-10/12">
          <Asset id={id}/>
        </div>
      </div>
  )
}

export default AssetPage