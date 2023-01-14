describe("app.js", () => {
    describe("Sidebar toggle and close functionality", () => {
    
  
      it("should toggle the 'show-sidebar' class when the toggle button is clicked", () => {
        const toggleBtn = document.querySelector('.sidebar-toggle');
        const sidebar = document.querySelector('.sidebar');
        toggleBtn.click();
        expect(sidebar.classList.contains("show-sidebar")).toBe(true);
        toggleBtn.click();
        expect(sidebar.classList.contains("show-sidebar")).toBe(false);
      });
      
      it("should toggle the 'show-sidebar' class when the close button is clicked", () => {
        const closeBtn = document.querySelector('.close-btn');
        const sidebar = document.querySelector('.sidebar');
       
        expect(sidebar.classList.contains("show-sidebar")).toBe(false);
        closeBtn.click();
        expect(sidebar.classList.contains("show-sidebar")).toBe(true);
        closeBtn.click();
        expect(sidebar.classList.contains("show-sidebar")).toBe(false);
      });

     it('should toggle the "show-sidebar" class on the sidebar when the toggle button is clicked', () => {
    toggleBtn.dispatchEvent(new Event('click'));
    expect(sidebar.classList.contains('show-sidebar')).toBeTruthy();
    toggleBtn.dispatchEvent(new Event('click'));
    expect(sidebar.classList.contains('show-sidebar')).toBeFalsy();
  });

  it('should toggle the "show-sidebar" class on the sidebar when the close button is clicked', () => {
    closeBtn.dispatchEvent(new Event('click'));
    expect(sidebar.classList.contains('show-sidebar')).toBeTruthy();
    closeBtn.dispatchEvent(new Event('click'));
    expect(sidebar.classList.contains('show-sidebar')).toBeFalsy();
  });

  it('should log "bop" to the console when the toggle button is clicked', () => {
    spyOn(console, 'log');
    toggleBtn.dispatchEvent(new Event('click'));
    expect(console.log).toHaveBeenCalledWith('bop');
  });
  
  it('should log "bip" to the console when the close button is clicked', () => {
    spyOn(console, 'log');
    closeBtn.dispatchEvent(new Event('click'));
    expect(console.log).toHaveBeenCalledWith('bip');
  });




  it('should not toggle the "show-sidebar" class on the sidebar if the toggle button is not present in the DOM', () => {
    toggleBtn.remove();
    sidebar.classList.add('show-sidebar');
    closeBtn.dispatchEvent(new Event('click'));
    expect(sidebar.classList.contains('show-sidebar')).toBeFalsy();
  });
  
  it('should not toggle the "show-sidebar" class on the sidebar if the close button is not present in the DOM', () => {
    closeBtn.remove();
    sidebar.classList.add('show-sidebar');
    toggleBtn.dispatchEvent(new Event('click'));
    expect(sidebar.classList.contains('show-sidebar')).toBeFalsy();
  });

    });
  });