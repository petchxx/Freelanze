import React from 'react';
import { useParams } from 'react-router-dom';
import services from '../data/services.json';
import freelancers from '../data/freelancers.json';
import users from '../data/users.json';
import Navbar from '../components/Navbar';
import gravatar from 'gravatar';

function ServicePage() {
    const { serviceId } = useParams();
    const service = services.find((item) => item.Service_ID == serviceId);
    const freelancer = freelancers.find((item) => item.Freelancer_ID == service.Freelancer_ID);
    const user = users.find((item) => item.User_ID == freelancer.User_ID);


    if (!service) {
        // Handle the case when the service is not found
        return (
            <div className="bg-white py-14">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold">Service Not Found</h2>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className='flex flex-col items-center px-4 py-40 bg-slate-50'>
                <Navbar />

                <div className='mt-4 md:mt-10 md:flex max-w-[1000px] w-full'>

                    <div className="w-full">
                        <div className="col-span-2 p-6 mb-4 bg-white rounded-2xl md:mr-2 ">
                            <img className='h-60 w-[420px] rounded-xl ' src={service.ImgUrl ?? 'https://picsum.photos/seed/' + Math.random(22) + '/400/300'} alt='' />
                            <div className='mt-4 text-4xl font-bold text-black'>{service.Title}</div>


                            <div className="my-4">
                                <div className='flex items-center mt-4 text-black'>
                                    {service.Description}
                                </div>
                            </div>
                        </div>

                        <div className="col-span-2 p-4 mb-4 text-black bg-white rounded-xl md:mr-2">
                            <div className="px-4 py-1 bg-white rounded-xl w-fit">
                                <div className='font-bold text-black text-l'>Freelancer</div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-12 h-12 mt-4 bg-white rounded-full">
                                    <img className='w-full h-full rounded-full' src={gravatar.url(user.Email)} alt="" srcSet="" />
                                </div>
                                <p className='mt-4 ml-2 text-sm font-bold text-primary'>{user.Display_Name}</p>
                            </div>



                        </div>

                    </div>

                    <div className="md:w-[50%] md:ml-2">

                        <div className="flex justify-center w-full bg-white rounded-xl">
                            {/* <div className="flex items-center justify-between">
                                <p className="text-white text-s">Price</p>
                                <p className="text-2xl font-bold text-white">฿ {service.Price}</p>
                            </div> */}


                            {/* input box */}
                            {/* <div className="flex flex-col justify-between mt-2">
                                <p className="text-white text-s">Information</p>
                                <textarea className="w-full h-24 px-2 mt-2 text-black border-2 border-white rounded-lg text-start" />
                            </div> */}

                            <stripe-buy-button
                                customer-email={JSON.parse(localStorage.getItem('user'))['Email']}
                                buy-button-id="buy_btn_1NmcsHIReu1tLJwFX1fA5wbe"
                                publishable-key="pk_test_51NmcoPIReu1tLJwFW0epJbENKsyRZCw2y3rXVmhqkyQg9aqZkDBLW7tF2uOtG0CCKYktZHDKRfiOjunkfQyFPze600LVTgB3to"
                            >
                            </stripe-buy-button>







                        </div>
                    </div>

                </div>

            </div >
        </>
    );
}

export default ServicePage;


{/* <div class="BuyButton-container is-fontFamily--NotoSans is-cardLayout flex-container direction-column justify-content-center align-items-center" data-testid="buy-button-container" style="background-color: rgb(255, 255, 255);"><div class="ProductDetails flex-container direction-column align-items-center"><div class="ProductNames flex-container direction-column"><div style="display: flex; align-items: center; justify-content: center; opacity: 1;"><span class="Text Text-color--default Text-fontSize--16 Text-fontWeight--500 Text--truncate" title="Service Charge" style="text-align: center;">Service Charge</span></div></div></div><div class="PriceDetails flex-container align-items-center"><span class="PriceDetails-price Text Text-color--default Text-fontSize--28 Text-fontWeight--600"><span>THB&nbsp;1,000</span></span></div><button class="BuyButton-Button is-cardLayout" type="button" data-testid="hosted-buy-button" style="background-color: rgb(255, 163, 26); color: rgb(0, 0, 0); --merchant-button-color: #ffa31a;"><div class="BuyButton-ButtonTextContainer"><span class="BuyButton-ButtonText Text Text-color--default Text-fontWeight--500 Text--truncate" data-testid="hosted-buy-button-text">Buy</span><div class="TestModeBadge-container" data-testid="hosted-buy-button-test-mode-badge"><div class="Tag TestModeBadge Tag-orange"><span class="Text Text-color--orange Text-fontSize--11 Text-fontWeight--700">TEST MODE</span></div></div></div></button><div class="PaymentMethodFooter-container flex-container direction-column justify-content-center align-items-center" data-testid="payment-method-footer-container"><div class="PaymentMethodFooter-label flex-container justify-content-center align-items-center"><span class="PaymentMethodFooter-label">Supported payment methods:</span></div><div class="flex-container"><img class="PaymentMethodFooter-image" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/amex-b933c9009eeaf8cfd07e789c549b8c57.svg" alt="amex" id="amex"><img class="PaymentMethodFooter-image" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/mastercard-86e9a2b929496a34918767093c470935.svg" alt="mastercard" id="mastercard"><img class="PaymentMethodFooter-image" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/visa-fb36094822f73d7bc581f6c0bad1c201.svg" alt="visa" id="visa"><img class="PaymentMethodFooter-image" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/apple_pay-ab270d32249c6d7660ac5ac394ed62ac.svg" alt="APPLE_PAY" id="APPLE_PAY"><div class="SinglePaymentMethodOverflow-container"><div class="SinglePaymentMethodOverflow-imageContainer SinglePaymentMethodOverflow-imageContainer--visible"><img class="PaymentMethodFooter-image" role="presentation" src="https://js.stripe.com/v3/fingerprinted/img/promptpay-e84560a0bfd2348d82c7f01078a94745.svg" alt="promptpay" id="promptpay"></div></div></div></div></div> */ }