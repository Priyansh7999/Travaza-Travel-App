import React, { useState, useEffect } from 'react';
import { Camera, MapPin, Clock, Star, Users, Plus, X, Save, Sparkles } from 'lucide-react';
import styles from './Attraction.module.css';

const CATEGORY_OPTIONS = [
  { name: 'Mountain', icon: '🏔️', color: 'mountain' },
  { name: 'Beach', icon: '🏖️', color: 'beach' },
  { name: 'Desert', icon: '🏜️', color: 'desert' },
  { name: 'Camping', icon: '🏕️', color: 'camping' },
  { name: 'Adventure', icon: '🚀', color: 'adventure' },
  { name: 'Romantic', icon: '💕', color: 'romantic' },
  { name: 'Historical', icon: '🏛️', color: 'historical' },
  { name: 'Wildlife', icon: '🦁', color: 'wildlife' }
];

const AGE_LIMIT_OPTIONS = [1, 5, 8, 15, 18];
const RATING_OPTIONS = [1, 2, 3, 4, 5];

export default function AnimatedAttractionForm() {
  const [form, setForm] = useState({
    destination: '',
    place: '',
    images: [''],
    description: '',
    rating: '',
    category: [],
    latitude: '',
    longitude: '',
    ageLimit: '',
    timing: '',
    suggestedDuration: '',
    tips: [''],
  });

  const [focusedField, setFocusedField] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category) => {
    setForm(prev => ({
      ...prev,
      category: prev.category.includes(category)
        ? prev.category.filter(c => c !== category)
        : [...prev.category, category]
    }));
  };

  const handleImageChange = (idx, value) => {
    const images = [...form.images];
    images[idx] = value;
    setForm(prev => ({ ...prev, images }));
  };

  const addImageField = () => {
    setForm(prev => ({ ...prev, images: [...prev.images, ''] }));
  };

  const removeImageField = (idx) => {
    const images = [...form.images];
    images.splice(idx, 1);
    setForm(prev => ({ ...prev, images }));
  };

  const handleTipChange = (idx, value) => {
    const tips = [...form.tips];
    tips[idx] = value;
    setForm(prev => ({ ...prev, tips }));
  };

  const addTipField = () => {
    setForm(prev => ({ ...prev, tips: [...prev.tips, ''] }));
  };

  const removeTipField = (idx) => {
    const tips = [...form.tips];
    tips.splice(idx, 1);
    setForm(prev => ({ ...prev, tips }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const data = {
      ...form,
      images: form.images.filter(i => i.trim()),
      category: form.category,
      tips: form.tips.filter(t => t.trim()),
      rating: Number(form.rating),
      latitude: form.latitude ? parseFloat(form.latitude) : null,
      longitude: form.longitude ? parseFloat(form.longitude) : null,
      ageLimit: Number(form.ageLimit)
    };
    
    console.log('Attraction Data:', data);
    setIsSubmitting(false);
    
    // Success animation
    const successDiv = document.createElement('div');
    successDiv.className = styles.successOverlay;
    successDiv.innerHTML = `
      <div class="${styles.successMessage}">
        <div class="${styles.successIcon}">🎉</div>
        <h3>Success!</h3>
        <p>Attraction saved successfully!</p>
      </div>
    `;
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
      document.body.removeChild(successDiv);
    }, 3000);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`${styles.star} ${i < rating ? styles.starFilled : styles.starEmpty}`}
      />
    ));
  };

  return (
    <div className={styles.container}>
      {/* Animated Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={`${styles.floatingElement} ${styles.element1}`}></div>
        <div className={`${styles.floatingElement} ${styles.element2}`}></div>
        <div className={`${styles.floatingElement} ${styles.element3}`}></div>
      </div>

      <div className={styles.formWrapper}>
        

        {/* Main Form */}
        <div className={styles.formContainer}>
          {/* Header */}
          <div className={styles.header}>
            <div className={styles.headerIcon}>
              <MapPin className={styles.icon} />
            </div>
            <h1 className={styles.title}>Create New Attraction</h1>
            <p className={styles.subtitle}>Share your amazing discovery with the world</p>
          </div>

          {/* Basic Information */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Sparkles className={styles.sectionIcon} />
              Basic Information
            </h2>
            
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Destination</label>
                <div className={styles.inputWrapper}>
                  <input
                    type="text"
                    name="destination"
                    value={form.destination}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('destination')}
                    onBlur={() => setFocusedField('')}
                    placeholder="Enter destination"
                    className={`${styles.input} ${focusedField === 'destination' ? styles.inputFocused : ''}`}
                    required
                  />
                  {focusedField === 'destination' && (
                    <div className={styles.inputIcon}>
                      <MapPin className={styles.iconPulse} />
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Place Name</label>
                <input
                  type="text"
                  name="place"
                  value={form.place}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField('place')}
                  onBlur={() => setFocusedField('')}
                  placeholder="Place name"
                  className={`${styles.input} ${focusedField === 'place' ? styles.inputFocused : ''}`}
                  required
                />
              </div>
            </div>
          </div>

          {/* Images Section */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Camera className={styles.sectionIcon} />
              Images
            </h2>
            
            <div className={styles.dynamicFields}>
              {form.images.map((img, idx) => (
                <div key={idx} className={styles.dynamicField}>
                  <div className={styles.dynamicInput}>
                    <input
                      type="text"
                      value={img}
                      onChange={(e) => handleImageChange(idx, e.target.value)}
                      placeholder="Image URL"
                      className={styles.input}
                      required={idx === 0}
                    />
                    {img && (
                      <div className={styles.validationIcon}>
                        <div className={styles.validationDot}></div>
                      </div>
                    )}
                  </div>
                  {form.images.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeImageField(idx)}
                      className={styles.removeButton}
                    >
                      <X className={styles.removeIcon} />
                    </button>
                  )}
                </div>
              ))}
              
              <button
                type="button"
                onClick={addImageField}
                className={styles.addButton}
              >
                <Plus className={styles.addIcon} />
                Add Image
              </button>
            </div>
          </div>

          {/* Description */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Description</h2>
            <textarea
              name="description"
              value={form.description}
              onChange={handleInputChange}
              onFocus={() => setFocusedField('description')}
              onBlur={() => setFocusedField('')}
              placeholder="Tell us about this amazing place..."
              rows={4}
              className={`${styles.textarea} ${focusedField === 'description' ? styles.inputFocused : ''}`}
              required
            />
          </div>

          {/* Rating and Age Limit */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Details</h2>
            
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <Star className={styles.labelIcon} />
                  Rating
                </label>
                <select
                  name="rating"
                  value={form.rating}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select Rating</option>
                  {RATING_OPTIONS.map(r => (
                    <option key={r} value={r}>
                      {r} Star{r !== 1 ? 's' : ''}
                    </option>
                  ))}
                </select>
                {form.rating && (
                  <div className={styles.starDisplay}>
                    {renderStars(Number(form.rating))}
                  </div>
                )}
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>
                  <Users className={styles.labelIcon} />
                  Age Limit
                </label>
                <select
                  name="ageLimit"
                  value={form.ageLimit}
                  onChange={handleInputChange}
                  className={styles.select}
                  required
                >
                  <option value="">Select Age Limit</option>
                  {AGE_LIMIT_OPTIONS.map(age => (
                    <option key={age} value={age}>{age}+ years</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Categories</h2>
            
            <div className={styles.categoryGrid}>
              {CATEGORY_OPTIONS.map(cat => (
                <label key={cat.name} className={styles.categoryLabel}>
                  <input
                    type="checkbox"
                    checked={form.category.includes(cat.name)}
                    onChange={() => handleCheckboxChange(cat.name)}
                    className={styles.categoryCheckbox}
                  />
                  <div className={`${styles.categoryCard} ${styles[cat.color]} ${form.category.includes(cat.name) ? styles.categoryCardSelected : ''}`}>
                    <div className={styles.categoryIcon}>{cat.icon}</div>
                    <div className={styles.categoryName}>{cat.name}</div>
                    {form.category.includes(cat.name) && (
                      <div className={styles.categorySelectedIcon}>
                        <div className={styles.categorySelectedDot}></div>
                      </div>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Location</h2>
            
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Latitude</label>
                <input
                  type="number"
                  step="any"
                  name="latitude"
                  value={form.latitude}
                  onChange={handleInputChange}
                  placeholder="0.000000"
                  className={styles.input}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Longitude</label>
                <input
                  type="number"
                  step="any"
                  name="longitude"
                  value={form.longitude}
                  onChange={handleInputChange}
                  placeholder="0.000000"
                  className={styles.input}
                />
              </div>
            </div>
          </div>

          {/* Timing */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              <Clock className={styles.sectionIcon} />
              Timing Information
            </h2>
            
            <div className={styles.grid}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Opening Hours</label>
                <input
                  type="text"
                  name="timing"
                  value={form.timing}
                  onChange={handleInputChange}
                  placeholder="e.g. 9:00 AM - 5:00 PM"
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Suggested Duration</label>
                <input
                  type="text"
                  name="suggestedDuration"
                  value={form.suggestedDuration}
                  onChange={handleInputChange}
                  placeholder="e.g. 2-3 hours"
                  className={styles.input}
                  required
                />
              </div>
            </div>
          </div>

          {/* Tips */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Tips & Recommendations</h2>
            
            <div className={styles.dynamicFields}>
              {form.tips.map((tip, idx) => (
                <div key={idx} className={styles.dynamicField}>
                  <div className={styles.dynamicInput}>
                    <input
                      type="text"
                      value={tip}
                      onChange={(e) => handleTipChange(idx, e.target.value)}
                      placeholder="Share a helpful tip..."
                      className={styles.input}
                      required={idx === 0}
                    />
                    {tip && (
                      <div className={styles.tipValidationIcon}>
                        <div className={styles.tipValidationDot}></div>
                      </div>
                    )}
                  </div>
                  {form.tips.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTipField(idx)}
                      className={styles.removeButton}
                    >
                      <X className={styles.removeIcon} />
                    </button>
                  )}
                </div>
              ))}
              
              <button
                type="button"
                onClick={addTipField}
                className={styles.addButton}
              >
                <Plus className={styles.addIcon} />
                Add Tip
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <div className={styles.submitSection}>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`${styles.submitButton} ${isSubmitting ? styles.submitting : ''}`}
            >
              {isSubmitting ? (
                <>
                  <div className={styles.spinner}></div>
                  Saving...
                </>
              ) : (
                <>
                  <Save className={styles.submitIcon} />
                  Save Attraction
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
