| **User Data Model Element** | **Description** | **Example Values / Notes** |
|-----------------------------|-----------------|----------------------------|
| **User Roles**              | User roles define access level and permissions. | - **Subscriber**: Default role for newly registered users.<br>- **Member/Teacher**: Upgraded role on subscription purchase. |
| **Custom User Metadata**    | Custom fields to capture additional subscription details. | |
| `subscription_plan`         | Identifier for the subscribed plan. | `sirah_grade_3`, `aqeedah_fiqh_ikhlaq_grade_2`, `weekend_schools_grade_1` |
| `access_level`              | Summary of content access rights. | `program1_grade_3`, `full_program_access` |
| `subscription_status`       | Status of the user's subscription. | `active`, `inactive`, `canceled` |
| `subscription_start_date`   | Date when the subscription started. | `2023-01-15` |
| `subscription_end_date`     | Date when subscription ends, if applicable. | `2024-01-14` |
| **Content Access Mapping**  | Maps content to the appropriate subscription plans. | |
| `accessible_to`             | List of subscription plans that grant access to a piece of content. | `sirah_grade_1`, `full_program_access` |
| **Subscription and Payment Details** | Financial and transaction details linked to a user. | |
| `payment_method`            | Last used payment method (tokenized/encrypted). | `stripe_card`, `paypal` |
| `billing_details`           | User's billing information, if stored. | Address, name on card |
| `transaction_history`       | Log of past payments, transactions. | Automatically managed by the plugin. |
| **Additional Custom Fields** | Optional fields for extended functionality or reporting. | |
| `last_login`                | Timestamp of the user's last login. | `2023-10-05 14:35` |
| `last_accessed_content`     | The ID or name of the last accessed content. | `sirah_class_3_manual.pdf` |
| `preferred_contact_method`  | User's preferred contact method. | `email`, `phone` |
