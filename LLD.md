## Low-Level Design Document (LLD)

### Summary:

The Low-Level Design (LLD) for the integration of RFID technology with KIOSK systems represents a meticulous plan to enhance asset management at ENEC. This technical blueprint delves into the intricacies of implementing RFID tags, offering a detailed framework for efficient asset tracking, identification, and location. The concurrent integration of KIOSK systems fortifies the security paradigm, ensuring that only authorized personnel gain access to specific zones and their designated assets.

The innovative use of a visual cue, manifested through a green or red light display on the KIOSK system, adds a layer of precision to asset configuration. This real-time feedback mechanism serves as a foolproof method to verify that the correct asset is deployed in the designated zone. The red light indication, triggered by misconfigurations, acts as a preemptive measure to avert potential accidents, promoting safe and effective asset utilization.

The overarching goal of this system is to revolutionize ENEC's asset management processes, guaranteeing meticulous tracking, assignment, and monitoring of assets. By mitigating the risk of accidents through stringent configuration checks, the LLD aims to instill a culture of safety and operational effectiveness among staff members. Ultimately, the proposed system emerges as a technological cornerstone for ENEC, aligning seamlessly with its vision for streamlined and secure asset management.

### 2. Purpose:

#### a. Detailing Technical Specifications:
The primary purpose of the Low-Level Design Document (LLD) is to delve into the technical specifics of the ENEC project. It aims to provide a granular breakdown of the high-level concepts outlined in the High-Level Design (HLD), offering a comprehensive view of how the proposed system will be implemented. This section will elucidate the methodologies, algorithms, data structures, and other technical aspects essential for the successful development and deployment of the RFID and KIOSK integration.

#### b. Bridging Conceptual and Technical:
The LLD serves as the bridge between conceptualization and technical execution. While the HLD sets the overarching goals and strategies, the LLD refines these concepts into actionable steps. It acts as a blueprint, guiding developers, architects, and other stakeholders in understanding the intricate details of the system architecture, communication protocols, and software components. This ensures a seamless transition from design to development, aligning the team's efforts with the project's strategic objectives.

In essence, the purpose of this section is to articulate a clear roadmap for turning abstract ideas into tangible technical solutions, fostering a shared understanding among all involved parties.



### 3. Project Scope:

#### 3.1 Implementation of Asset Management and Verification System
The primary focus of the project centers around the meticulous implementation of a sophisticated asset management and verification system. This entails leveraging cutting-edge RFID technology and KIOSK systems to facilitate seamless tracking and identification of assets within the organizational framework. By adopting these advanced technologies, the system aims to elevate the efficiency and accuracy of asset management processes.

#### 3.2 Real-time Tracking and Movement History
A pivotal objective within the project scope is to establish real-time tracking capabilities for assets, providing an intricate and up-to-the-minute movement history. This functionality ensures that the system captures and meticulously records the dynamic trajectory of assets as they traverse various points within the organization. The emphasis on real-time tracking enhances transparency and accountability in the management of organizational assets.

#### 3.3 Offline Functionality and Officer Confirmation
Ensuring operational resilience, the project includes the implementation of offline functionality for KIOSK systems. This feature empowers staff members to access and update asset information even in offline environments, thereby minimizing disruptions to the workflow. Additionally, the system incorporates officer confirmation and logging mechanisms, adding a layer of accountability during asset movements. This meticulous approach guarantees that each transition is verified, logged, and attributed to the responsible officer, reinforcing the integrity of the asset management system.

### 4. Key Design Considerations:

#### 4.1 Kiosk System Design:
Design a user-friendly and intuitive Kiosk system tailored for seamless interaction with RFID technology. Ensure that the system operates efficiently in both online and offline modes, maintaining a consistent user experience across various operational scenarios. Pay particular attention to the integration of RFID functionality into the user interface, optimizing the scanning process for quick and accurate asset identification.

#### 4.2 Integration with Asset Management System:
Devise and implement a robust integration mechanism that seamlessly synchronizes RFID-tagged asset parameters between the Kiosk system and the central asset management system. Guarantee data consistency and accuracy across both environments, taking into account the unique identifiers provided by RFID technology. Focus on minimizing latency in data transfer and ensuring that edits made through the Kiosk system reflect promptly in the asset management system.

#### 4.3 Real-Time Asset Tracking:
Leverage RFID technology to design a real-time asset tracking mechanism capable of capturing and displaying precise movements. Implement RFID tags to enable accurate tracking, considering factors such as tag range, frequency, and data encoding. Develop algorithms for efficient data processing to provide users with up-to-the-moment information on asset locations and movements.

#### 4.4 Movement History Logging:
Implement a comprehensive logging mechanism utilizing RFID data to record officer confirmations and maintain a detailed history of asset movements. Capture relevant timestamps, user details, and RFID tag information to construct a thorough audit trail. Ensure the system's ability to retrieve and present historical data for reporting and analysis purposes.

#### 4.5 Offline Data Synchronization:
Devise a mechanism to synchronize RFID data captured by the Kiosk system when offline with the central asset management system upon reestablishing connectivity. Address challenges related to potential data conflicts, ensuring smooth and accurate data synchronization. Implement strategies for efficient conflict resolution and provide clear notifications to users about the synchronization process.

#### 4.6 Security and Access Control:
Integrate robust security measures into the RFID-enabled Kiosk system to safeguard against unauthorized access and data manipulation. Implement strong authentication mechanisms, access controls, and encryption protocols to protect both the Kiosk system and the RFID data. Regularly update security protocols to align with industry best practices and emerging threats.

#### 4.7 Performance Optimization:
Optimize the performance of the RFID system to handle high transaction volumes and concurrent user interactions. Fine-tune data retrieval processes and implement caching mechanisms to ensure a responsive user experience. Consider RFID-specific performance factors, such as tag read speed and anti-collision protocols.

#### 4.8 Error Handling and Validation:
Implement thorough error handling and validation mechanisms specific to RFID data. Ensure the integrity of RFID-tagged information by validating against predefined criteria. Provide clear error messages and guidance to users in case of validation failures, emphasizing the importance of accurate RFID data input.

#### 4.9 Scalability and Future Growth:
Design the RFID system with scalability in mind, accommodating potential increases in data volume, user load, and additional features. Consider the scalability of RFID infrastructure, such as the ability to support a growing number of RFID tags and readers. Plan for future enhancements and integrations to adapt the system to evolving project requirements.

#### 4.10 User Training and Support:
Develop comprehensive training materials specifically addressing the RFID aspects of the Kiosk system. Provide RFID-focused user manuals, FAQs, and interactive guides to facilitate effective user training. Address common challenges associated with RFID technology and offer ongoing support to ensure users can proficiently navigate and utilize the RFID-enabled features of the system.


### 5. Solution Components
Please find the following solution components diagram of innfini platform, which describes the site wise hardware and communication with the server as well as the server application.

![image](https://github.com/RaoAkif/LowLevelDesignDoc/assets/61361037/9278adb0-1080-40da-9bd4-3deeb6a368a2)


### 6. Communication Matrix
A matrix detailing communication aspects within the project.
![image](https://github.com/RaoAkif/LowLevelDesignDoc/assets/61361037/89bc9cfa-cfb1-45da-846b-494acadb9bc3)


### 7.	Functional Communication Matrix
![image](https://github.com/RaoAkif/LowLevelDesignDoc/assets/61361037/2d7aacd0-565f-40ec-8e8b-12d9d0c03657)


### 8. Functional Requirements

#### 8.1 Asset Verification:
   a. **KIOSK Placement:**
      - The KIOSK shall be strategically placed at the entrance of different sites/zones for asset verification.
   b. **Verification Process:**
      - When an individual enters a site or zone with an associated asset, the KIOSK will initiate the verification process.
      - The KIOSK shall check whether the asset is authorized to enter the specific zone.
   c. **Visual Indicators:**
      - If the assigned asset is permitted in the zone, the KIOSK shall activate a green light.
      - If the asset is not allowed, the KIOSK shall display a red light.
   
#### 8.2 Movement History:
   a. **Asset Custodian Movement:**
      - The system shall maintain a comprehensive movement history of the asset custodian.
   b. **Officer Confirmation:**
      - The officer must confirm each movement to the next asset.
      - Confirmation actions shall be logged and accessible in reports, specifying the confirming officer.

#### 8.3 Officer Confirmation:
   a. **Confirmation Requirement:**
      - The officer must confirm their intention to move to the next asset.
   b. **Logging and Reporting:**
      - The system shall log and generate reports detailing the movements confirmed by each officer.
      - Access controls shall be implemented to restrict report access based on officer credentials (derived from login data).

#### 8.4 Reporting:
   a. **Confirmation Logging:**
      - The system shall log officer confirmations for each asset movement.
   b. **Report Access Control:**
      - Access controls will be in place to restrict access to confirmation reports based on officer credentials.
   c. **Data Entry Maintenance:**
      - All data entry activities shall be recorded on the KIOSK, and the system shall maintain the data until it is online.
   d. **Data Synchronization:**
      - Once online, the KIOSK shall push the accumulated data to the server.

#### 8.5 Offline Functionality:
   a. **Offline Status Display:**
      - The KIOSK shall display an indicator on the screen indicating whether it is online or offline.
   b. **Asset Registry Update:**
      - Regular updates of the asset registry shall be pulled from the server to the KIOSK during offline periods.
   c. **Data Entry and Storage:**
      - All data entry activities, including asset verifications and officer confirmations, shall be maintained on the KIOSK during offline periods.
   d. **Data Push to Server:**
      - As soon as the KIOSK regains online connectivity, it shall initiate the synchronization process to push the locally stored data to the server.


### 9 Non-Functional Requirements

#### 9.1 Performance:
   a. **Handling Volume:**
      - The system should be capable of efficiently handling a high volume of asset verification requests concurrently.
   b. **Response Time:**
      - The response time for asset verification requests should be less than 3 seconds, ensuring swift and seamless user experience.

#### 9.2 Security:
   a. **Role-Based Access Control (RBAC):**
      - The system shall implement Role-Based Access Control, ensuring that users have access privileges based on their roles.
   b. **Confidentiality and Integrity:**
      - The system shall maintain the confidentiality and integrity of asset and staff data throughout all processes and interactions.
   c. **Protection Measures:**
      - The system shall employ robust measures to protect against unauthorized access and hacking attempts, safeguarding the integrity and security of the data.

#### 9.3 Usability:
   a. **User-Friendly KIOSK Interface:**
      - The KIOSK interface shall be designed to be user-friendly, intuitive, and easily navigable.
   b. **Reliability and Availability:**
      - The system shall maintain a high level of reliability and be available at all times, minimizing downtime and ensuring continuous operation.
   c. **Scalability:**
      - The system should be designed with scalability in mind, allowing for future growth and accommodating increased demand without compromising performance.
   d. **Compatibility:**
      - The system should be compatible with the existing ICT infrastructure at ENEC, ensuring seamless integration and interoperability with the current technology landscape.




### 10. Design Considerations

10.1 **Innovative & Smart Design:**
The design of the kiosk system places a strong emphasis on innovation and intelligence. Striving for a modern and aesthetically pleasing appearance, the goal is to implement a design that not only serves its functional purpose effectively but also adds an element of sophistication. Additionally, the inclusion of anti-corrosion power coating ensures longevity and durability, contributing to the overall resilience of the system.

10.2 **Ergonomically and Compact Structure:**
The kiosk is designed with a focus on ergonomics to enhance user comfort and operational efficiency. The structure is carefully crafted to be compact, ensuring optimal use of space. User-friendly interfaces and intuitive controls are incorporated, making interactions with the kiosk straightforward. Furthermore, the design facilitates ease of maintenance by ensuring that components are easily accessible for servicing.

10.3 **Rugged Steel Frame and Overtime Running:**
The structural foundation of the kiosk relies on a rugged steel frame, providing robustness and durability. This choice of material ensures the system's ability to withstand external pressures and environmental factors. Moreover, the design is optimized for continuous and prolonged operation, with a commitment to achieving high precision for enhanced performance. The focus on high stability and reliability aims to minimize disruptions in functionality.

10.4 **Cost-Effective & Customer-Oriented Design:**
A key consideration in the design process is the pursuit of cost-effectiveness without compromising functionality. The design aims to meet the needs and expectations of customers, ensuring that the system is not only efficient but also aligned with user requirements. Scalability and flexibility are incorporated to accommodate potential future enhancements, making the design both customer-oriented and adaptable.

10.5 **Kiosk Design with 1 Laptop RFID Reader Plates per Kiosk:**
Each kiosk is equipped with a dedicated laptop RFID reader plate, emphasizing a tailored approach to integration. This design choice ensures seamless communication and compatibility between the RFID reader and the overall kiosk system. The singular focus on one RFID reader per kiosk enhances system efficiency and responsiveness.

10.6 **Display Screen Starting from 160cm Height:**
To optimize user visibility and accessibility, the design places the display screen at a height of 160cm from the ground. This strategic positioning takes into consideration ergonomic principles, ensuring that users can interact with the screen comfortably and efficiently.

10.7 **RFID Reader Plates Dimensions (50cm X 26cm):**
The RFID reader plates are meticulously designed with dimensions of 50cm X 26cm. This specific sizing is chosen to optimize the scanning capabilities and overall functionality of the RFID system. The dimensions are carefully calibrated to strike a balance between efficiency and form factor.

10.8 **Required Kiosk Dimensions (50cm X 75cm):**
Maintaining a streamlined approach to space efficiency, the kiosk is designed with dimensions of 50cm X 75cm. This ensures that the kiosk occupies an appropriate footprint while accommodating all necessary components seamlessly.

10.9 **Display Screen Opposite RFID Reader Plates:**
The positioning of the display screen opposite the RFID reader plates is a deliberate design choice. This configuration enhances user interaction by providing a clear and unobstructed view of the information displayed. It contributes to an intuitive and user-friendly experience.

10.10 **Light Strip Around the Screen:**
Adding an element of aesthetic appeal, a light strip is integrated around the display screen. This design feature not only enhances the visual attractiveness of the kiosk but also serves a functional purpose by improving visibility. The light strip contributes to drawing attention to the kiosk in various environments.

10.11 **RFID Reader Plate Height at 80cm:**
The RFID reader plates are positioned at a height of 80cm from the ground. This strategic placement is chosen to optimize user accessibility and ease of use. The design ensures that users can interact with the RFID reader plates comfortably, aligning with ergonomic considerations.

10.12 **Rotation and Tilt Movement for Screen:**
To offer users flexibility in viewing angles, the design incorporates rotation and tilt movement for the display screen. This feature allows users to adjust the screen to their preferred positions, enhancing the overall user experience. The focus on customizable viewing angles contributes to the versatility of the kiosk system.


