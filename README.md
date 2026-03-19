
## 🔗 
- **Live Link :**https://ticket-system-1410940998.surge.sh/
- **GitHub Repository:** https://github.com/ApornaRakshit/ticket-system

---


# Customer Support Zone/ Ticket System

This project is a React-based **Customer Support Zone** designed to display customer tickets, track progress, and mark them as resolved. It follows a Figma design and includes additional features like status management, responsiveness, and toast notifications using **React-Toastify**.

---

## 📌 Features & Requirements 

### ✅ Navbar 

* Website name/logo on the **left**.
* Menu items and **New Ticket** button on the **right**.

### ✅ Banner

* Banner section designed according to Figma.
* Shows a **linear gradient** background.
* Displays ticket statistics:

  * **In Progress Count**
  * **Resolved Count** (default = 0).

### ✅ Main Section

1. **JSON Data **

   * Created **10–15 tickets** with the following properties:

     * `id`, `title`, `description`, `customer`, `priority`, `status`, `createdAt`.

2. **Ticket Cards**

   * Display all ticket information in a **card layout**.
   * Cards arranged in a **2-column grid** (left side).

3. **Task Status Section**

   * Clicking a card adds it to the **Task Status Section** (right side) and shows alert. It will increase the count of in-progress in banner
   * Task Status shows:

     * Ticket Title
     * **Complete Button**
   * Clicking **Complete Button**:

     * show alert
     
### ✅ Footer 

* Designed according to Figma.

### ✅ Responsiveness 

* The entire website is **responsive** for mobile devices.

###  Create a README file to answer the following question-

 - What is JSX, and why is it used?
 - Ans: JSX এর পূর্ণরূপ হলো JavaScript XML। React এ আমরা JSX ব্যবহার করি যাতে JavaScript এর ভিতরে HTML এর মতো কোড লিখতে পারি। এটা ব্যবহার করলে UI কোড সহজে বুঝা যায়। পরে React এই JSX কোডকে সাধারণ JavaScript এ convert করে।
 - What is the difference between State and Props?
 - Ans: Props ব্যবহার করা হয় parent component থেকে child component এ data পাঠানোর জন্য। Props read-only, অর্থাৎ এটাকে পরিবর্তন করা যায় না।
State হলো component এর নিজের data যা সময় অনুযায়ী পরিবর্তন হতে পারে। State পরিবর্তন হলে component পুনরায় render হয়।
Props → বাইরে থেকে আসে এবং change করা যায় না
State → component এর ভিতরের data এবং change করা যায়
 - What is the useState hook, and how does it work?
 - Ans: useState হলো একটি React Hook, যা functional component এ state ব্যবহার করার জন্য ব্যবহৃত হয়। এটি দুইটি জিনিস return করে: বর্তমান state value, state update করার function|যখন আমরা update function ব্যবহার করি, তখন React component আবার render করে। Example:
const [count, setCount] = useState(0); এখানে count হলো state এবং setCount দিয়ে আমরা state update করি।
 - How can you share state between components in React?
 - Ans: React এ state share করার জন্য সাধারণত lifting state up পদ্ধতি ব্যবহার করা হয়। এখানে state কে common parent component এ রাখা হয় এবং তারপর props এর মাধ্যমে child component এ পাঠানো হয়। এভাবে একাধিক component একই state ব্যবহার করতে পারে।
 - How is event handling done in React?
 - Ans: React এ event handling JavaScript এর মতো হলেও এখানে camelCase syntax ব্যবহার করা হয়। আমরা event এর সাথে একটি function pass করি। Example:
Click Me এখানে onClick হলো event এবং handleClick হলো function যা button click করলে execute হবে।

---

### 

### 🔔 React-Toastify 

* Used **React-Toastify** to replace all alerts with stylish toast notifications.

### 📝 Task Completion Logic 

Clicking **Complete Button**:

1. It is **removed from Task Status**. 
2. It is added to the **Resolved List**. 
3. The **In Progress count decreases**. 
4. The **Resolved count increases**. 
5. It is removed from the **Customer Tickets list**. 



## 🧰 Required Technology Stack

- **HTML**
- **CSS** (Tailwind / DaisyUI)
- **JavaScript**
- **React.js** (Mandatory)



### 📅 Deadline For 60 marks: 5th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 50 marks: 6th March, 2026 (11:59 pm ⏱️)

### 📅 Deadline For 30 marks: Until the next assignment is published.


---


