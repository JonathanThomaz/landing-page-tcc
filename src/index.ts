class ThemeManager {
  private currentTheme: string;
  private toggleButton: HTMLElement | null;
  private htmlElement: HTMLElement | null;

  constructor() {
    this.htmlElement = document.documentElement;
    this.toggleButton = document.getElementById("theme-toggle");
    this.currentTheme = localStorage.getItem("theme") || "light";

    this.init();
  }

  private init(): void {
    this.setTheme(this.currentTheme);
    this.updateToggleIcon();

    if (this.toggleButton) {
      this.toggleButton.addEventListener("click", () => this.toggleTheme());
    }
  }

  private setTheme(theme: string): void {
    if (this.htmlElement) {
      this.htmlElement.setAttribute("data-bs-theme", theme);
      this.currentTheme = theme;
      localStorage.setItem("theme", theme);
    }
  }

  private toggleTheme(): void {
    const newTheme = this.currentTheme === "light" ? "dark" : "light";
    this.setTheme(newTheme);
    this.updateToggleIcon();
    this.animateToggle();
  }

  private updateToggleIcon(): void {
    if (this.toggleButton) {
      const icon = this.toggleButton.querySelector("i");
      if (icon) {
        icon.className =
          this.currentTheme === "light" ? "bi bi-moon-fill" : "bi bi-sun-fill";
      }
    }
  }

  private animateToggle(): void {
    if (this.toggleButton) {
      this.toggleButton.style.transform = "scale(0.8)";
      setTimeout(() => {
        this.toggleButton!.style.transform = "scale(1)";
      }, 150);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Inicializar funcionalidade de tema
  new ThemeManager();
});

// === EXPORTAR PARA POSSÍVEL USO EXTERNO === //
export { ThemeManager };
