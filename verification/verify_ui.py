from playwright.sync_api import sync_playwright

def verify_frontend():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        try:
            # Navigate to the app (running on port 10000 as per package.json)
            page.goto("http://localhost:10000")

            # Wait for content to load
            page.wait_for_selector("h1")

            # Check for the Header text "Qwen-Web"
            header = page.locator("h1")
            print(f"Header text: {header.text_content()}")

            # Take a screenshot
            page.screenshot(path="verification/frontend_screenshot.png")
            print("Screenshot taken.")

        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    verify_frontend()
