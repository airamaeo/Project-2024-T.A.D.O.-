import React, { useState } from 'react';

const CompanyRules = () => {
    const [selectedButton, setSelectedButton] = useState("Button-1");

    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
    };

    return (
        <div className="company-rules-container">
            <h1 className="company-heading">About Our Company Leave Policies</h1>
            <div className="company-leaves-container">
                <div className="leaveTypes">
                    <div className="leave-btn-vertical" role="group" aria-label="Vertical button group">
                        <button type="button" className="leave-btn" onClick={() => handleButtonClick("Button-1")}>Annual Leave</button>
                        <button type="button" className="leave-btn" onClick={() => handleButtonClick("Button-2")}>Sick Leave</button>
                        <button type="button" className="leave-btn" onClick={() => handleButtonClick("Button-3")}>Maternity Leave</button>
                        <button type="button" className="leave-btn" onClick={() => handleButtonClick("Button-4")}>Paternal Leave</button>
                        <button type="button" className="leave-btn" onClick={() => handleButtonClick("Button-5")}>Bereavement Leave</button>
                        <button type="button" className="leave-btn" onClick={() => handleButtonClick("Button-6")}>Unpaid Leave</button>
                    </div>
                </div>
                <div className="leave-paragraph-container">
                    {selectedButton && (
                        <>
                            <h3 className="leave-paragraph-heading">
                                {selectedButton === "Button-1" && "Annual Leave"}
                                {selectedButton === "Button-2" && "Sick Leave"}
                                {selectedButton === "Button-3" && "Maternity Leave"}
                                {selectedButton === "Button-4" && "Paternal Leave"}
                                {selectedButton === "Button-5" && "Bereavement Leave"}
                                {selectedButton === "Button-6" && "Unpaid Leave"}
                            </h3>
                            <p className="leave-paragraph">
                                {selectedButton === "Button-1" && (
                                    <>
                                        All employees, whether they are full-time, part-time, temporary or casual, earn annual leave entitlements from the time they start work. Most employees are entitled to four weeks paid annual leave per leave year. Depending on time worked, employees' holiday entitlements should be calculated by one of the following methods:
                                        <br />
                                        <ol>
                                            <li>4 working weeks in a leave year in which the employee works at least 1,365 hours (unless it is a leave year in which he or she changes employment)</li>
                                            <li>1/3 of a working week per calendar month that the employee works at least 117 hours</li>
                                            <li>8% of the hours an employee works in a leave year (but subject to a maximum of 4 working weeks)</li>
                                        </ol>
                                        If more than one of the preceding methods at (1), (2), or (3) above is applicable, the employee shall be entitled to whichever method provides the greater entitlement. However, the maximum statutory annual leave entitlement of an employee in a leave year is four of his/her normal working weeks. The employer determines the timing of an employee’s annual leave, taking into consideration work and personal requirements and should consult him/her or the relevant union in advance. Pay for the leave must be given in advance and calculated at the employee’s normal weekly rate.
                                        <br />
                                        <br />
                                        <h4>Accrual of Annual Leave while on Certified Sick Leave:</h4>
                                        From 1st August 2015, workers can accrue annual leave when they are on long term sick leave. This means -
                                        <ul>
                                            <li>Statutory annual leave entitlement accrues during a period of certified sick leave.</li>
                                            <li>An annual leave carryover period of 15 months after a leave year will apply to those employees who could not, due to illness, take annual leave during the relevant leave year or during the normal carryover period of 6 months.</li>
                                            <li>On termination of employment, payment in lieu of untaken accrued annual leave will apply to leave which was untaken as a result of illness in circumstances where the employee leaves the employment within a period of 15 months following the end of the leave year during which the statutory leave entitlement accrued.</li>
                                        </ul>
                                        <br />
                                        These changes were brought about under Section 86(1) of the Workplace Relations Act 2015.
                                    </>
                                )}
                                {selectedButton === "Button-2" && (
                                    <>
                                        The Sick Leave Act came into effect on 1 January 2023.
                                        <br />
                                        <br />
                                        <h4>What does the Sick Leave Act 2022 provide for?</h4>
                                        The Sick Leave Act, 2022 provides for a statutory sick pay scheme for all employees.
                                        <br />
                                        <br />
                                        <h4>How many days paid sick leave are provided for?</h4>
                                        For 2023 the entitlement was 3 days paid sick leave.
                                        <br />
                                        <br />
                                        From 1 January 2024 the entitlement is 5 days paid sick leave.
                                        <br />
                                        <br />
                                        It is proposed that the entitlement will increase to 7 days for 2025 and to 10 days for 2026.
                                        <br />
                                        <br />
                                        These increases will be provided for by Ministerial Regulations in due course
                                        <br />
                                        <br />
                                        <h4>What is the Rate of Payment Payable to an Employee?</h4>
                                        Employees are entitled to a rate of 70% of their usual daily earnings up to a maximum of €110 a day for certified leave only.
                                        <br />
                                        <br />
                                        <h4>Who Qualifies for Statutory Sick Leave and what Conditions Apply?</h4>
                                        Employees must have completed 13 weeks’ continuous service with the employer before availing of statutory sick leave.  The employee must provide their employer with a medical certificate from a registered medical practitioner and the certificate must state that the employee named is unfit to work due to their illness or injury.
                                        <br />
                                        <br />
                                        The entitlement is triggered by the employee’s first statutory sick leave day.  The leave must be in relation to a day or days when an employee would ordinarily work but is incapable of doing so due to illness or injury. The leave can be taken on consecutive or non-consecutive days.
                                        <br />
                                        <br />
                                        Any unused sick leave expires at the end of a calendar year.
                                        <br />
                                        <br />
                                        <h4>Are there any Circumstances where Statutory Sick Leave does not Apply?</h4>
                                        Yes, but such instances are limited; as follows:
                                        <ul>
                                            <li>An employment contract may provide for more favourable sick leave provisions.</li>
                                            <li>Where an employer provides employees with a sick leave scheme the benefits of which are more favourable.</li>
                                            <li>An employer whose business is experiencing severe financial difficulties may apply to the Labour Court for an exemption to pay sick leave. If an exemption is granted, it will be for a minimum of three months and up to one year.</li>
                                        </ul>
                                        <br />

                                        <h4>Do I Qualify if I am on Probation?</h4>
                                        The statutory sick pay scheme applies to employees on probation, employees undergoing training and employees employed under a contract of apprenticeship. However, probation, training or the apprenticeship may be suspended for the duration of the statutory sick leave where the employer considers that the employee’s absence from employment while on statutory sick leave would not be consistent with the continuance of the probation, training or apprenticeship.
                                        <br />
                                        <br />
                                        <h4>Will part-time employees be entitled to 5 days in 2024?</h4>
                                        Yes. The Act does not differentiate between full and part-time employees.
                                        <br />
                                        <br />
                                        <h4>If an employee has multiple employers, are they entitled to 5 days in 2024 from each employer?</h4>
                                        Yes. Once an employee has completed the 13 weeks service requirement for an employer, they are entitled to 5 days’ statutory sick leave in 2024.
                                        <br />
                                        <br />
                                        <h4>What Employee Protections are Included?</h4>
                                        Employers are obliged to ensure their employees receive no negative treatment for requesting this leave. Employees on statutory sick leave must be treated as if they have not been absent from work and this leave shall not affect any rights related to the employee’s employment.  Therefore, employees may not be penalised or threatened with penalisation for exercising or proposing to exercise their entitlement to statutory sick leave.
                                        <br />
                                        <br />
                                        <h4>Records to be retained by an employer</h4>
                                        An employer must maintain a record of all statutory sick leave taken to include:
                                        <ol>
                                            <li>the period of employment of each employee who availed of statutory sick leave,</li>
                                            <li>the dates and times of statutory sick leave in respect of each employee who availed of such leave, and</li>
                                            <li>the rate of statutory sick leave payment in relation to each employee who availed of statutory sick leave.</li>
                                        </ol>
                                        Records must be retained for four years. Employers failing to keep accurate records may be convicted and subject to fines up to €2,500.
                                        <br />
                                        <br />
                                        <h4>Making a complaint to the Workplace Relations Commission (WRC)</h4>
                                        Where an employer fails to abide by the statutory sick leave entitlements, an employee may submit a complaint to the Workplace Relations Commission where a complaint may be heard in the first instance by an Adjudication Officer.  An Adjudication Officer (or the Labour Court on appeal) may award compensation not exceeding 4 weeks’ remuneration in respect of the employee’s employment.
                                    </>
                                )}
                                {selectedButton === "Button-3" && (
                                    <>
                                        Employees (including casual workers) who become pregnant are entitled to Maternity Leave, regardless of how long they have been working for the organisation or the number of hours worked per week. The entitlement to leave is enshrined in the Maternity Protection Act, 1994 and the Maternity Protection (Amendment) Act, 2004. The current entitlement is to 26 weeks’ maternity leave together with 16 weeks additional unpaid maternity leave.
                                        <br />
                                        <br />
                                        Under the Maternity Protection (Amendment) Act 2004 at least 2 weeks have to be taken before the end of the week of your baby's expected birth and at least 4 weeks after.
                                    </>
                                )}
                                {selectedButton === "Button-4" && (
                                    <>
                                        The Paternity Leave and Benefit Act 2016 commenced on 1 September 2016. It provides statutory paternity leave and benefit for relevant parents.
                                        <br />
                                        <br />
                                        <h4>Leave/Benefit:</h4>
                                        A relevant parent is entitled to two continuous weeks' paid leave in respect of births from September 2016. Payment will be at the rate set by the Department of Social Protection, subject to a person having the appropriate PRSI contributions. This is the same as the current rate of maternity benefit. Similar to maternity leave, employers can top up paternity benefit if they want.
                                        <br />
                                        <br />
                                        <h4>Applicants for Paternity Leave:</h4>
                                        The leave is available to relevant parents, including self-employed, same sex couples and those adopting. The definition of relevant parent is set out in the legislation and "relevant parent" is defined as the father of the child, the spouse, civil partner or cohabitant of the mother. The leave applies to only one person, except in the case of adoption, whereby a biological father may have already taken paternity leave. In such a case the legislation allows the subsequent adopting father to also take leave. In the case of stillbirth or a miscarriage, the entitlement to paternity leave continues. If one parent dies, then the other parent inherits whatever paternity leave hasn’t been taken.
                                        <br />
                                        <br />
                                        <h4>Relevant time for taking the leave:</h4>
                                        The leave can be taken at any time in the 26 weeks' following the birth of the child (or placement in the case of adoption). 4 weeks' notice is required before the leave may be taken however there is provision for shorter notice. The legislation allows for the postponement of leave in certain circumstances, such as the sickness of a relevant parent and hospitalisation of the child.
                                        <br />
                                        <br />
                                        <h4>Penalisation for taking Paternity Leave:</h4>
                                        The legislation contains protections from penalisation for taking paternity leave and preservation of employment rights while on paternity leave. The legislation contains provisions such as the voidance of termination/notice of termination of a relevant parent while he/she is on paternity leave or the suspension of an employee while on leave.
                                        <br />
                                        <br />
                                        <h4>Record Keeping (Offences):</h4>
                                        Under Section 17 (1) of the legislation an employer shall make a record of the paternity leave of their employees indicating the period of employment for each employee and the dates and times in respect of which each employee was on paternity leave and under Section 17(2) this record shall be retained for 8 years. A contravention of Section 17 (1) or (2) is an offence, proceedings for which may be brought and prosecuted by the Workplace Relations Commission (proceedings to be commenced within 12 months from the date of the offence) and shall be liable on summary conviction to a class B Fine (currently not to exceed €4,000).
                                        <br />
                                        <br />
                                        <h4>Complaints to WRC:</h4>
                                        Any dispute regarding paternity leave may be referred to an Adjudication Officer of the Workplace Relations Commission (WRC) or on appeal to the Labour Court under Section 41 or 44 of the 2015 Act.

                                    </>
                                )}
                                {selectedButton === "Button-5" && (
                                    <>
                                        Bereavement leave is paid time off work when an immediate family member dies.
                                        <br />
                                        <br />
                                        You may be granted up to 5 days paid leave on the death of your:
                                        <ul>
                                            <li>father</li>
                                            <li>mother</li>
                                            <li>brother</li>
                                            <li>sister</li>
                                            <li>father-in-law</li>
                                            <li>mother-in-law</li>
                                        </ul>
                                        You are allowed up to 20 days paid leave if your spouse or child dies.
                                        <br />
                                        <br />
                                        You may also get extra days leave where an immediate relative dies abroad and you must travel to take charge of the funeral arrangements.
                                        <br />
                                        <br />
                                        Bereavement leave is granted at the time of the bereavement to give you time off from work. It is not granted retrospectively (for example, where a bereavement happens during days or shifts when you are not normally rostered to work).
                                        <br />
                                        <br />
                                        In some circumstances, you may be given up to 3 days special leave on the death of a more distant relative.
                                        <br />
                                        <br />
                                        This may apply if you:
                                        <ul>
                                            <li>live in the same house as the deceased</li>
                                            <li>must take charge of funeral arrangements</li>
                                        </ul>
                                    </>
                                )}
                                {selectedButton === "Button-6" && (
                                    <>
                                        You can take up to 5 days leave without pay to care for someone who needs significant care or support for a serious medical reason. The leave is available to parents and carers.
                                        <br />
                                        <br />
                                        You can apply for the leave to care for your:
                                        <ul>
                                            <li>child (or other relevant person)</li>
                                            <li>spouse or civil partner</li>
                                            <li>cohabitant</li>
                                            <li>arent or grandparent</li>
                                            <li>brother or sister</li>
                                            <li>a person who lives in the same household as you (and not specified above)</li>
                                        </ul>
                                        You do not need to have minimum service to take the leave.
                                        <br />
                                        <br />
                                        <h4>Taking the leave</h4>
                                        You may be given up to 5 days leave for medical care in a year.
                                        <br />
                                        <br />
                                        You cannot take the leave for periods of less than 1 day. If you take leave for medical care purposes for part of a day, it counts as 1 day.
                                        <br />
                                        <br />
                                        You do not have to take the leave all together, it can be taken over a 12 month period.
                                    </>
                                )}
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CompanyRules;
