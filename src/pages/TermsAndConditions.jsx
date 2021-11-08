import React from 'react'
import Layout from '../components/Layout';


function TermsAndConditions() {
    return (
            <Layout>
                <div class="container-fluid container-min-max-width">
                <h2 class="text-center mb-5">Terms and Conditions</h2>
                            <h2 class="mb-3 text-center">These are the terms and conditions, please read them carefully:</h2>                         
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ad ipsum veritatis esse tenetur in enim sit quisquam necessitatibus delectus perferendis nisi, vero a alias, corrupti iure neque ratione accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam a omnis nobis tenetur neque quia vel veritatis esse pariatur, fuga temporibus, ex alias harum, magni sapiente illum nisi eius!</p>
                            <br />                     
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto ad ipsum veritatis esse tenetur in enim sit quisquam necessitatibus delectus perferendis nisi, vero a alias, corrupti iure neque ratione accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea laboriosam a omnis nobis tenetur neque quia vel veritatis esse pariatur, fuga temporibus, ex alias harum, magni sapiente illum nisi eius!</p>
                            <br />
                            <div className="d-flex justify-content-center">
                                <form action="">
                                    <div className="d-flex flex-direction-column align-items-center">
                                        <input type="checkbox" id="agree" name="terms" value="agreeTerms" />
                                        <label for="agree" className="ms-1"> I have read and understood all the Terms and Conditions</label> <br />
                                    </div>
                                    <div className="d-flex flex-direction-column align-items-center">
                                        <input type="checkbox" id="disagree" name="terms" value="disagreeTerms" />
                                        <label for="disagree" className="ms-1"> I want to receive promotional emails</label> <br />
                                    </div>
                                    <div className="mt-3 text-center">
                                    <button type="submit" className="btn btn-outline-dark fw-bold" value="Submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                </div>     
            </Layout>
    )
}

export default TermsAndConditions;
