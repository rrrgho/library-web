import React, {FC} from 'react';
import BottomTabs from "../../../components/moleculs/BottomTabs";
import HomeBottomSheet from "../../organisms/HomeBottomSheet";
import HomeBanner from "../../../components/moleculs/HomeBanner";

const HomeScreen: FC = () => {
    return(
        <>
            <HomeBanner />
            <HomeBottomSheet />
            <BottomTabs />
        </>
    )
}

export default HomeScreen