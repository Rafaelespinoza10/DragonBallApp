

export const useGradiant = () => {
    const gradients = [
        "bg-gradient-to-r from-fuchsia-500 to-pink-500",
        "bg-gradient-to-r from-indigo-400 to-cyan-400",
        "bg-gradient-to-r from-fuchsia-600 to-purple-600",
        "bg-gradient-to-r from-fuchsia-500 to-cyan-500"
      ];
    
      return gradients[Math.floor(Math.random() * gradients.length)];
  
}
