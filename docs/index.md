## About This Project

FoodTrails seeks to be a web-based platform to help schools (and other public organizations) track food procurement with an aim towards increased purchasing from local providers.
This website provides an informational overview of the project. If you have further questions please reach out to us at [contact@foodtrails.org](mailto:contact@foodtrails.org?Subject=Contact Page Request)

## Background & Objectives

In 2022, the Rhode Island Department of Education (RIDE) retained the food systems consultancy KK&P– with project partners DigiCyber, The Center for Good Food Purchasing, and Farm to Institution New England (FINE)– to define the parameters of a technology tool that could eliminate the burden of manual data entry for school food authorities, increase accuracy of local procurement tracking, and leverage those capacities to promote and enhance the scope and efficacy of local food procurement initiatives in RI and beyond. FoodTrails emerged from this initiative and research.
In Rhode Island, Farm to School and associated local food procurement efforts have been growing over the years, with benefits accruing at the levels of environment, economy, community, and individual health. RI needs comprehensive data about what is being purchased, from whom, from where, and in what format (and more) in order to understand, evaluate, monitor, and grow local food procurement efforts; to understand the economic, social, and health impacts of those purchases; to seek funding in order to grow farm to school and other local food procurement efforts; and to influence procurement-related legislation. Yet accessing comprehensive, reliable, real-time data on local food procurement has proven elusive, both in RI and elsewhere around the country. Manual aggregation and analysis of local procurement data have proven to be prohibitively time-intensive—a reality which creates limits to stakeholder willingness to participate in data collection along all segments of the supply chain—while also being significantly subject to human error.
After extensive research with people across the RI school food supply chain, the consultant team summarized specifications for the development of a baseline platform that serves as a first step toward minimizing manual data entry and improving the accuracy of metric generation in local food procurement tracking. Those specifications are outlined below. 
In partnership with RIDE, in 2024, FoodTrails– comprised of DigiCyber and KK&P, who led the initial research– will be developing a platform that enables users to upload procurement data/velocity reports, standardize and clean this data, and produce reliable metrics. It is meant to serve as a proof of concept through which to test the assumptions and recommendations made prior to development and to establish a strong, initial technological foundation upon which to expand functionality, partnerships, goals, and impact. 
The broader, long-term goal of the software tool is to improve supply chain transparency, inform policy, and catalyze procurement of local food by educational institutions.


## Baseline Platform Specifications

It is important to note that there is a broad range of functions a platform that meets these objectives could have and a broad range of goals that it could achieve. In defining the specifications below, the project team boiled down the problem and solution to their simplest forms. This simple, initial, baseline solution creates a foundation on which complexity can later be built, as needs and context change and as the universe of users expands.

With the knowledge that even the best technology tool cannot bring forth better data from the supply chain than the supply chain itself possesses and is willing to share, the minimum platform specifications below were developed based on the specific existing stakeholder capacities described and observed during project research and the actual quality and consistency of available data. The project team sees that the data chain itself can be enhanced iteratively, just as the software tool will be.

Based on the research processes and findings above, the KK&P team recommends that RIDE’s initial round of development of a web-based platform for tracking local food procurement include the following base functions:

- A user (SFA or FSMC) has the ability to upload velocity reports from suppliers for whom data pipelines have been developed (this is addressed in more detail in the Distributor & Supplier Data Onboarding section of this report).
- A user can retrieve all of their own historic uploaded velocity reports as well as the standardized and cleaned data at any time.
- Users with an administration role can view the data of facilities under their responsibility, including both raw and standardized reports and relevant data metrics. (E.g. A school district administrator can view data of all facilities they oversee; a RIDE administrator can access all data for all RIDE users.)
- The software application will convert units and aggregate purchases when provided varied standard units (i.e. bushels, cases, lbs, oz).
- Locality of food can be determined given that a minimum level of data is provided–i.e. one of the following: producer name, address, or zip code.
- The software maintains an up-to-date list of local suppliers identified from uploaded velocity reports. This list can be used as a directory of available local suppliers by product category.
- Supplier locality is determined based upon the user’s primary operating location using a mileage radius or state boundaries, as identified by an administrator. Backend systems would likely rely on Google Maps or OpenStreetMap Application Programming Interfaces (APIs) to fill in supplier location information gaps.
- The application is able to dynamically display users’ purchase metrics in a dashboard for individual users and in aggregate for the public. Metrics to be displayed in the dashboard need to be determined and could include: Total local spend, total regional spend, spend by product category, spend by vendor, etc.

The specifications above define the “minimum viable product” that would accomplish this project’s goal and lay a foundation upon which more users, functions, and broader goals can be overlaid over time. While future platform goals and functions should be defined and prioritized with users as the platform is developed and adapted, the following additional potential functions emerged in our research with stakeholders in RI and beyond:

- Invoice reading (from PDFs or cell phone pictures)
- Tracking of other values-based characteristics
- Customizable dashboards which are saved to user profile
- Mobile optimization
- Integration (via an API) with FSMC and supply chain partners’ internal systems, such as Chartwells MyFinance and MyOrders.
- Tracking purchases by grant/funding pool or by type of meal program (e.g. breakfast vs. lunch) to help expedite regulatory and funding compliance reporting 
- Recognition, reconciliation, and cleaning of data duplicates to enable multiple types of users (e.g. distributors and districts)

## Distributor & Supplier Data Onboarding

Supplier data onboarding will be an early step in the platform development process, and for that reason, we want to outline some key components of that process within this memo. The project team’s research indicated that each supplier utilizes their own unique format of velocity reports, based on the data they have, how that data is organized within the software they use internally, and the structure and consistency of that data. As a result, specialized data pipelines must be constructed for each supplier in order to allow the platform to navigate these varying formats and then incorporate and standardize that data on the backend for analysis.

These unique data pipelines represent one of the largest uncertainties within this project, as the difference in velocity report and data structure exist across suppliers but also within the reports of a single supplier if the underlying source of their data is not unified. For example, not all suppliers provide product descriptions in the same format or even in the same field within their internal databases and often rely on human-entered data which can introduce input errors. Product measurements too are also often provided in unpredictable formats (#, lbs, pounds, or various typos associated with each of these, etc.) which must be unified for the data and platform to be useful to users.

Limiting the testing cohort of suppliers to three is based on the assumption that distributors will provide velocity reports to school districts in their unique formats, as they always have. Once development begins, if suppliers are willing to adapt to a standardized velocity report format, a larger number of suppliers could be onboarded in a more cost-effective manner; ideally, suppliers will eventually be shepherded toward improved and more standardized data through contract language or other market pressures. More information on this desired future state as well as recommended steps to take to get there can be found in the Recommendations section below. In the initial baseline platform, if velocity reports are uploaded from suppliers for whom data pipelines have not yet been built, that data will not be read by or incorporated into the platform. After this initial phase of development and testing, the team will make recommendations on how to streamline the data pipeline development process and how to handle data from not-yet-onboarded suppliers.

Steps to onboard a new supplier and build a supplier pipeline might include:
- Conduct outreach to and build buy-in from suppliers
- Gather as many examples as possible of velocity reports from each participating supplier in order to understand unique data formats and structures to be integrated (these can come directly from the supplier, if they are actively engaged, or from school/district/FSMC users)
- Determine whether the supplier velocity report provides the minimum amount of data needed to be read by the platform as local, not local, or “information not available” (e.g. line-item purchases which include quantity, product type or description, price, date information, and, optimally, the ability to determine the product origin location through supplier name, address or zip code)
- Develop a standardized velocity report format that distributors/suppliers can opt into and promote that opportunity.
- Define approach/source guide for standardizing volume and other units of measure (e.g. translating bushels to pounds).
- Develop a data pipeline to standardize product information, units, and price into a universally uniform format.

Once developed, the data pipeline will translate data from a variety of unique velocity report formats into a standardized format that can be used for data aggregation and analysis across all suppliers.

## User Engagement

After participating in onboarding processes designed by the development team (the components of which will be defined during the initial platform development process and timeline), users within the testing cohort will be required to participate in user research interviews which will be an hour in length at a regular frequency (such as monthly), during the initial product development. They will also be required to complete periodic questionnaires. In addition, initial users will be expected to submit bug tickets, file complaints, and seek support as needed as they interact with the platform.

Optimally, RIDE will participate in user research interviews and complete periodic questionnaires as well, offering the product development team ongoing input as platform administrator. It is customary for user participation to be incentivized—the client and development team can determine what methods might be effective and what resources might be available for such incentives.

The initial testing described above occurs during the development of the minimum viable product (MVP). Upon resolving initial development issues with the small group of users, the development team and client will determine when the platform is ready to move to an “open beta” stage of development, in which a broader group of users are invited to use the platform (with the understanding that its development is ongoing) and provide feedback to the development team with the understanding that it is still under development.

