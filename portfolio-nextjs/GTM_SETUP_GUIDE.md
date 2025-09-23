# 🚀 Google Tag Manager (GTM) + GA4 Setup Guide

## 📋 **Step 1: Create GTM Account**

1. **Go to Google Tag Manager**: [tagmanager.google.com](https://tagmanager.google.com/)
2. **Create Account**:
   - Account Name: `Humphrey Portfolio`
   - Country: `Kenya`
   - Data Sharing: Enable all options
3. **Create Container**:
   - Container Name: `Portfolio Website`
   - Target Platform: `Web`
4. **Get GTM ID**: Format `GTM-XXXXXXX`

## 🔧 **Step 2: Update Your Code**

Replace `GTM-XXXXXXX` in `src/app/layout.tsx` with your actual GTM ID:

```tsx
<GoogleTagManager GTM_ID="GTM-XXXXXXX" />
```

## 📊 **Step 3: Configure GA4 in GTM**

### **3.1 Create GA4 Configuration Tag**
1. In GTM, go to **Tags** → **New**
2. **Tag Configuration**: Choose `Google Analytics: GA4 Configuration`
3. **Measurement ID**: Enter your GA4 ID `G-QDQEL9P44E`
4. **Trigger**: Choose `All Pages`
5. **Save** and **Name**: `GA4 Configuration`

### **3.2 Create GA4 Event Tags (Optional)**
For enhanced portfolio tracking:

**Scroll Depth Tracking:**
- **Tag Type**: `Google Analytics: GA4 Event`
- **Event Name**: `scroll_depth`
- **Parameters**:
  - `scroll_percentage`: `{{Scroll Depth Threshold}}`
- **Trigger**: `Scroll Depth` (25%, 50%, 75%, 90%)

**Portfolio Section Views:**
- **Tag Type**: `Google Analytics: GA4 Event`
- **Event Name**: `portfolio_section_view`
- **Parameters**:
  - `section_name`: `{{Page URL}}`
- **Trigger**: `Page View` with specific URLs

## 🎯 **Step 4: Enhanced Tracking Setup**

### **4.1 Custom Variables**
Create these variables in GTM:

**Page Section Variable:**
- **Variable Type**: `Custom JavaScript`
- **Name**: `Page Section`
- **Code**:
```javascript
function() {
  var path = window.location.hash;
  if (path.includes('#')) {
    return path.substring(1);
  }
  return 'home';
}
```

**Portfolio Interaction Variable:**
- **Variable Type**: `Data Layer Variable`
- **Name**: `Portfolio Interaction`
- **Data Layer Variable Name**: `portfolio_interaction`

### **4.2 Custom Events**
Push events to dataLayer in your components:

```javascript
// In your portfolio components
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
  'event': 'portfolio_interaction',
  'interaction_type': 'section_view',
  'section_name': 'about',
  'timestamp': new Date().toISOString()
});
```

## 🔍 **Step 5: Testing & Debugging**

### **5.1 Preview Mode**
1. In GTM, click **Preview**
2. Enter your website URL: `https://humphrey-portfolio-rho.vercel.app`
3. Test all tags and triggers

### **5.2 Debug Tools**
- **GTM Preview**: Real-time tag firing
- **Google Analytics DebugView**: Live event tracking
- **Browser Console**: Check for errors

### **5.3 Common Issues & Solutions**

**Issue**: Tags not firing
- **Solution**: Check triggers and conditions

**Issue**: GA4 not receiving data
- **Solution**: Verify Measurement ID and configuration

**Issue**: Events not appearing
- **Solution**: Check event parameters and naming

## 📈 **Step 6: Advanced Tracking**

### **6.1 Enhanced Ecommerce (if applicable)**
Track portfolio interactions as "purchases":
- **Event**: `purchase`
- **Parameters**: `value`, `currency`, `items`

### **6.2 Custom Dimensions**
Set up custom dimensions for:
- Portfolio section
- User engagement level
- Device type
- Traffic source

### **6.3 Goals & Conversions**
Set up goals for:
- Contact form submissions
- Resume downloads
- External link clicks
- Time on site > 2 minutes

## 🚀 **Step 7: Deployment**

1. **Test in Preview Mode**
2. **Publish Container** in GTM
3. **Deploy your website** with GTM ID
4. **Verify tracking** in GA4 Real-time reports

## 📊 **Expected Results**

### **Real-time Data:**
- Page views
- User sessions
- Traffic sources
- Device information

### **Enhanced Events:**
- Portfolio section views
- Scroll depth tracking
- Time on page
- User interactions

### **Custom Reports:**
- Portfolio performance
- User engagement metrics
- Conversion tracking
- Audience insights

## 🛠️ **Troubleshooting**

### **GTM Not Loading:**
- Check GTM ID format
- Verify script placement
- Check browser console for errors

### **GA4 Not Receiving Data:**
- Verify Measurement ID
- Check GA4 configuration tag
- Test in DebugView

### **Events Not Tracking:**
- Check trigger conditions
- Verify dataLayer pushes
- Test in Preview mode

---

## 🎯 **Quick Start Checklist**

- [ ] Create GTM account
- [ ] Get GTM ID (`GTM-XXXXXXX`)
- [ ] Update code with GTM ID
- [ ] Create GA4 Configuration tag
- [ ] Set up triggers
- [ ] Test in Preview mode
- [ ] Publish container
- [ ] Deploy website
- [ ] Verify in GA4

**Your portfolio will have comprehensive tracking with GTM + GA4!** 🚀
