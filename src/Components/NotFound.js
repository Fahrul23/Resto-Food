import React from 'react';

function NotFound(props) {
    return (
        <section class="fore-zero padding-tb">
            <div class="container">
                <div class="row align-items-center flex-row-reverse">
                    <div class="col-xl-6 col-lg-6 col-12">
                        <div class="fore-zero-thumb">
                            <img src="assets/images/404.png" alt="404_image" />
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-12">
                        <div class="fore-zero-content">
                            <h2><span>Oops!</span></h2>
                            <h3>The City You Are Looking For Could No Be Found</h3>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default NotFound;