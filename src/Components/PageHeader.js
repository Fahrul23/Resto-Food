import React from 'react';

function PageHeader(props) {
    return (
        <>
            <section class="page-header style-2" style={{height:200}}>
                <div class="container">
                    <div class="page-title text-center pb-3">
                        <h3 className="pb-3">{props.title}</h3>
                        
                    </div>
                </div>
            </section>   
        </>
    );
}

export default PageHeader;