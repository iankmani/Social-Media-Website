export default function Avatar() {
  return (
    <div className="w-12 h-12 rounded-full overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="User avatar"
        className="object-cover w-full h-full"
      />
    </div>
  );
}
