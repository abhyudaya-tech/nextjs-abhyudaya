Sure! Here’s a complete, summarized yet detailed documentation of your **tables** and **views**, their structure, and their relations based on our conversation. This will be a useful reference for future changes or migrations.

---

## **1. Tables Documentation**

### **1.1 `auth.users`** (Supabase Auth Users)

* **Purpose**: Stores authentication-related user data.
* **Fields**:

  * `uid`: UUID, primary key.
  * `display_name`: Text, user’s display name.
  * `email`: Text, user’s email address (unique).
  * `phone`: Text, user’s phone number.
  * `provider`: Text, authentication provider (e.g., `email`, `google`).
  * `provider_type`: Text, type of provider (e.g., `oauth`).
  * `created_at`: Timestamp, when the account was created.
  * `last_sign_in_at`: Timestamp, when the user last signed in.

---

### **1.2 `internal_users`** (Internal User Data)

* **Purpose**: Stores internal user-related data (doesn’t include sensitive information like email or phone).
* **Fields**:

  * `auth_user_id`: UUID (FK to `auth.users.uid`), links to the Supabase Auth users.
  * `responsibility`: Text, internal user’s role or responsibility.
  * `address`: Text, user’s address.
  * `joining_date`: Date, the date the user joined.
  * `is_verified`: Boolean, whether the user is verified.
  * `is_active`: Boolean, whether the user is active.
  * `created_at`: Timestamp, when the internal user record was created.
  * `updated_at`: Timestamp, when the internal user record was last updated.
  * `bio`: Text, organizational details (e.g., bio information for internal use).

**Relation**: Linked to `auth.users` via `auth_user_id`.

---

### **1.3 `ycm_users`** (YCM User Data)

* **Purpose**: Stores YCM-specific user data (contains details like full name, email, phone, etc.).
* **Fields**:

  * `id`: UUID (Primary Key).
  * `full_name`: Text, full name of the user.
  * `email`: Text, user’s email address.
  * `phone`: Text, user’s phone number.
  * `created_at`: Timestamp, when the YCM user was created.
  * `profile_pic`: Text, URL for the user’s profile picture.
  * `area_of_residence`: Text, where the user lives.
  * `city`: Text, the city the user is located in.
  * `organisation`: Text, the user’s associated organization.
  * `gender`: Text, gender of the user.
  * `dob`: Date, date of birth.

**Relation**:

* Linked to `internal_users` via `auth_user_id` in `internal_users` and `id` in `ycm_users`.

---

### **1.4 `role_history`** (User Role History)

* **Purpose**: Tracks the history of roles assigned to users.
* **Fields**:

  * `id`: UUID, primary key.
  * `user_id`: UUID (FK to `internal_users.auth_user_id`), links to the internal user.
  * `role_id`: UUID (FK to `roles.id`), links to the roles.
  * `start_date`: Date, role start date.
  * `end_date`: Date, role end date (nullable).

---

### **1.5 `roles`** (Roles Information)

* **Purpose**: Stores details of various roles that users can have.
* **Fields**:

  * `id`: UUID, primary key.
  * `name`: Text, role name.
  * `description`: Text, role description.
  * `bio`: Text, additional bio information.

---

### **1.6 `team`** (Teams Information)

* **Purpose**: Stores teams within the organization.
* **Fields**:

  * `id`: UUID, primary key.
  * `name`: Text, team name.
  * `description`: Text, team description.
  * `team_lead`: UUID (FK to `internal_users.auth_user_id`), links to the team lead.
  * `coordinating_trustee`: UUID (FK to `internal_users.auth_user_id`), links to the coordinating trustee.

---

### **1.7 `team_members`** (Team Membership)

* **Purpose**: Associates users to teams.
* **Fields**:

  * `id`: UUID, primary key.
  * `team_id`: UUID (FK to `team.id`), links to the team.
  * `user_id`: UUID (FK to `internal_users.auth_user_id`), links to the user.

---

### **1.8 `ycm_circles`** (YCM Circles)

* **Purpose**: Stores information about YCM circles.
* **Fields**:

  * `id`: UUID, primary key.
  * `name`: Text, circle name.
  * `description`: Text, circle description.
  * `created_at`: Timestamp, when the circle was created.
  * `type`: Enum, type of circle (e.g., `community`).

---

### **1.9 `ycm_circle_members`** (Circle Membership)

* **Purpose**: Associates users to YCM circles.
* **Fields**:

  * `id`: UUID, primary key.
  * `user_id`: UUID (FK to `ycm_users.id`), links to the user.
  * `circle_id`: UUID (FK to `ycm_circles.id`), links to the circle.
  * `responsibility`: Text, user’s responsibility within the circle.
  * `is_primary`: Boolean, indicates if the user is the primary member.
  * `joined_at`: Timestamp, when the user joined the circle.

---

### **1.10 `ycm_events`** (YCM Events)

* **Purpose**: Stores YCM event information.
* **Fields**:

  * `id`: UUID, primary key.
  * `circle_id`: UUID (FK to `ycm_circles.id`), links to the circle.
  * `title`: Text, event title.
  * `description`: Text, event description.
  * `image_url`: Text, image URL for the event.
  * `start_datetime`: Timestamp, start of the event.
  * `end_datetime`: Timestamp, end of the event.
  * `created_by`: UUID (FK to `ycm_users.id`), links to the creator of the event.
  * `created_at`: Timestamp, when the event was created.
  * `updated_at`: Timestamp, when the event was last updated.
  * `is_active`: Boolean, whether the event is active or not.

---

### **1.11 `ycm_knowledge_items`** (YCM Knowledge Items)

* **Purpose**: Stores knowledge articles or items related to YCM.
* **Fields**:

  * `id`: UUID, primary key.
  * `title`: Text, title of the knowledge item.
  * `content`: Text, content of the knowledge item.
  * `category`: Enum, category of the item.
  * `section`: Enum, section in the knowledge base.
  * `sequence`: Integer, sequence number.
  * `link`: Text, external link (optional).
  * `image_url`: Text, URL to an image related to the item.
  * `is_visible`: Boolean, whether the item is visible.
  * `created_at`: Timestamp, when the item was created.
  * `updated_at`: Timestamp, when the item was last updated.
  * `subtitle`: Text, optional subtitle for the knowledge item.

---

### **1.12 `ycm_updates`** (YCM Updates)

* **Purpose**: Stores updates related to YCM.
* **Fields**:

  * `id`: UUID, primary key.
  * `circle_id`: UUID (FK to `ycm_circles.id`), links to the circle.
  * `title`: Text, title of the update.
  * `description`: Text, description of the update.
  * `icon`: Text, optional icon for the update.
  * `start_date`: Date, start date for the update.
  * `end_date`: Date, end date for the update.
  * `created_by`: UUID (FK to `ycm_users.id`), links to the creator of the update.
  * `created_at`: Timestamp, when the update was created.
  * `updated_at`: Timestamp, when the update was last updated.
  * `subtitle`: Text, optional subtitle for the update.
  * `is_active`: Boolean, whether the update is active.

---

## **2. Views Documentation**

### **2.1 `user_with_role_and_team` View**

* **Purpose**: Provides user details along with their roles and teams.
* **Fields**:

  * `user_id`: UUID, user’s ID from `internal_users`.
  * `full_name`: Text, from `ycm_users`.
  * `email`: Text, from `ycm_users`.
  * `phone`: Text, from `ycm_users`.
  * `responsibility`: Text, from `internal_users`.
  * `gender`: Text, from `internal_users`.
  * `address`: Text, from `internal_users`.
  * `joining_date`: Date, from `internal_users`.
  * `is_verified`: Boolean, from `internal_users`.
  * `is_active`: Boolean, from `internal_users`.
  * `created_at`: Timestamp, from `internal


_users`.

* `updated_at`: Timestamp, from `internal_users`.
* `bio`: Text, from `internal_users`.
* `role_id`: UUID, linked to `role_history`.
* `role_name`: Text, from `roles`.
* `role_description`: Text, from `roles`.
* `role_bio`: Text, from `roles`.
* `teams`: JSONB array, list of teams the user belongs to.

---

### **2.2 `team_with_members_and_leads` View**

* **Purpose**: Provides detailed information about teams, their leads, coordinating trustees, and members.
* **Fields**:

  * `team_id`: UUID, team ID.
  * `team_name`: Text, team name.
  * `description`: Text, team description.
  * `coordinating_trustee_name`: Text, coordinating trustee’s full name from `ycm_users`.
  * `team_lead_name`: Text, team lead’s full name from `ycm_users`.
  * `members`: JSONB array, list of team members with `auth_user_id`, `full_name`, `email`, `phone`.

---

### **2.3 `circle_with_members` View**

* **Purpose**: Provides detailed information about YCM circles and their members.
* **Fields**:

  * `circle_id`: UUID, circle ID.
  * `circle_name`: Text, circle name.
  * `description`: Text, circle description.
  * `members`: JSONB array, list of circle members with `auth_user_id`, `full_name`, `email`, `phone`.

---

### **Relationships Summary**:

1. **`auth.users`** ↔ **`internal_users`** via `auth_user_id`.
2. **`internal_users`** ↔ **`ycm_users`** via `auth_user_id` (for internal users) ↔ `id` (for YCM users).
3. **`internal_users`** ↔ **`roles`** via `role_history`.
4. **`internal_users`** ↔ **`team`** via `team_members`.
5. **`ycm_users`** ↔ **`ycm_circle_members`** via `id` ↔ `user_id`.
6. **`ycm_circles`** ↔ **`ycm_circle_members`** via `id` ↔ `circle_id`.

---

This documentation should serve as a comprehensive reference for your tables, relationships, and views. It will also help you track any future changes or migrations!

Let me know if you need anything else.
