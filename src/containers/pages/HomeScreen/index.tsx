import React, {FC} from 'react';
import BottomTabs from "../../../components/moleculs/BottomTabs";
import MenuGrid from "../../../components/moleculs/MenuGrid";
import FrontNotification from "../../../components/moleculs/FrontNotification";
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