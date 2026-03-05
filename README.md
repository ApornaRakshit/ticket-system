
### ✅ Readme: 

 ### What is JSX, and why is it used?
 - Ans: JSX এর পূর্ণরূপ হলো JavaScript XML। React এ আমরা JSX ব্যবহার করি যাতে JavaScript এর ভিতরে HTML এর মতো কোড লিখতে পারি। এটা ব্যবহার করলে UI কোড সহজে বুঝা যায়। পরে React এই JSX কোডকে সাধারণ JavaScript এ convert করে।
 ## What is the difference between State and Props?
 - Ans: Props ব্যবহার করা হয় parent component থেকে child component এ data পাঠানোর জন্য। Props read-only, অর্থাৎ এটাকে পরিবর্তন করা যায় না। 
 - State হলো component এর নিজের data যা সময় অনুযায়ী পরিবর্তন হতে পারে। State পরিবর্তন হলে component পুনরায় render হয়।
- Props → বাইরে থেকে আসে এবং change করা যায় না
- State → component এর ভিতরের data এবং change করা যায়
 ## What is the useState hook, and how does it work?
 - Ans: useState হলো একটি React Hook, যা functional component এ state ব্যবহার করার জন্য ব্যবহৃত হয়। এটি দুইটি জিনিস return করে: বর্তমান state value, state update করার function|যখন আমরা update function ব্যবহার করি, তখন React component আবার render করে। Example: 
- const [count, setCount] = useState(0);
এখানে count হলো state এবং setCount দিয়ে আমরা state update করি।
 ## How can you share state between components in React?
 - Ans: React এ state share করার জন্য সাধারণত lifting state up পদ্ধতি ব্যবহার করা হয়। এখানে state কে common parent component এ রাখা হয় এবং তারপর props এর মাধ্যমে child component এ পাঠানো হয়। এভাবে একাধিক component একই state ব্যবহার করতে পারে।
 ## How is event handling done in React?
 - Ans: React এ event handling JavaScript এর মতো হলেও এখানে camelCase syntax ব্যবহার করা হয়। আমরা event এর সাথে একটি function pass করি। Example: 
 - <button onClick={handleClick}>Click Me</button>
এখানে onClick হলো event এবং handleClick হলো function যা button click করলে execute হবে।

---

### 
