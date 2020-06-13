import React from "react"
import ProductTable from './new-orders-detail-view-tables/detail-view-product-table';
import DetailTable from './new-orders-detail-view-tables/detail-view-detail-table';
import DetailBtn from './new-orders-detail-view-tables/detail-view-btn';

const CompletedOrdersDetailView=(props)=>(
    <div className="modal2">
        <ProductTable p={props}/>
        <DetailTable p={props}/>
        <DetailBtn p={props}/>
    </div>
)


export default CompletedOrdersDetailView
