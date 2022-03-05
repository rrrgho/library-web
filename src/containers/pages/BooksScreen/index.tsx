import React, {FC} from 'react'
import DummyBooks from './dummy-books.json'
import ItemsScreen from "../../organisms/ItemsScreen";

const BooksScreen: FC = () => {
    return (
        <>
            <ItemsScreen data={DummyBooks} />
        </>
    )
}

export default BooksScreen