import React from 'react';

const Form = ({onFirstInputChange,onSecondInputChange,onFormSubmit}) => {
    return(
        <div className=''>
            <article className="center mw5 mw6-ns hidden mv4">
                <main className="pt4 pb4">
                    <form className="measure" onSubmit={onFormSubmit}>
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="tc f3 fw6 ph0 mh0">Request for a driver , Enter your location!</legend>
                            <div className="mt3 ml4">
                                <label className="fw6 lh-copy f4">Enter your x-axis coordinates: </label>
                                <input 
                                    onChange={onFirstInputChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-30 ma2" 
                                    type="number" 
                                    step='0.1'
                                    min='0'
                                    max='50'
                                    placeholder='Example: 8'
                                    required
                                />
                            </div>
                            <div className="mv3 ml4">
                                <label className="fw6 lh-copy f4">Enter your y-axis coordinates :</label>
                                <input 
                                    onChange={onSecondInputChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-30 ma2" 
                                    type="number" 
                                    step='0.1'
                                    min='0'
                                    max='50'
                                    placeholder='Example: 34' 
                                    required
                                />
                            </div>
                        </fieldset>
                        <div className="tr mr4">
                            <input 
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f4 dib br4" 
                                style={{outline: 'none'}}
                                type="submit" 
                                value="FIND DRIVERS NEARBY" 
                            />
                        </div>
                    </form>
                </main>
            </article>
        </div>
    )
}

export default Form;