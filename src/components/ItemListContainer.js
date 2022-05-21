import './ItemListContainer.css';

function ItemListContainer(props) {
    return (
        <h1 className='container'>
            {props.greeting}
        </h1>
    );
}

export default ItemListContainer;